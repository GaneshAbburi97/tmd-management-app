import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthTokens } from '@/types';
import { STORAGE_KEYS } from '@/utils/constants';

const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://api.example.com';

export const api = axios.create({
  baseURL,
  timeout: 10000,
});

// Stable session ID for CSRF pairing
const SESSION_ID = Math.random().toString(36).slice(2);

// Cached CSRF token from server
let csrfToken: string | null = null;

// ─── Request Interceptor ──────────────────────────────────────────
api.interceptors.request.use(async (config) => {
  config.headers = config.headers || {};
  config.headers['Content-Type'] = 'application/json';
  config.headers['x-session-id'] = SESSION_ID;

  if (csrfToken) {
    config.headers['x-csrf-token'] = csrfToken;
  }

  const raw = await AsyncStorage.getItem(STORAGE_KEYS.TOKENS);
  if (raw) {
    const tokens = JSON.parse(raw) as AuthTokens;
    if (tokens?.accessToken) {
      config.headers['Authorization'] = `Bearer ${tokens.accessToken}`;
    }
  }

  return config;
});

// ─── Response Interceptor ─────────────────────────────────────────
// Captures CSRF token from every response. On 401, auto-refreshes token.
api.interceptors.response.use(
  (response) => {
    const serverCsrf = response.headers['x-csrf-token'];
    if (serverCsrf) csrfToken = serverCsrf;
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Always capture CSRF even from error responses
    const serverCsrf = error.response?.headers?.['x-csrf-token'];
    if (serverCsrf) csrfToken = serverCsrf;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEYS.TOKENS);
        if (raw) {
          const tokens = JSON.parse(raw) as AuthTokens;
          const { data } = await api.post('/auth/refresh-token', {
            refreshToken: tokens.refreshToken,
          });
          const newTokens: AuthTokens = data.data;
          await AsyncStorage.setItem(STORAGE_KEYS.TOKENS, JSON.stringify(newTokens));
          originalRequest.headers['Authorization'] = `Bearer ${newTokens.accessToken}`;
          return api(originalRequest);
        }
      } catch {
        await AsyncStorage.removeItem(STORAGE_KEYS.TOKENS);
      }
    }

    return Promise.reject(error);
  }
);

// ─── Bootstrap CSRF ───────────────────────────────────────────────
// /health is registered BEFORE issueCsrfToken middleware in server.ts,
// so it does NOT return a CSRF token. We must hit a route under /api instead.
// GET /api/exercises is public (no auth) and goes through issueCsrfToken.
export const bootstrapCsrf = async (): Promise<void> => {
  try {
    await api.get('/exercises');
  } catch {
    // 401/403 errors are fine — the response interceptor still captures the header
  }
};
