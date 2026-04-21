import axios from 'axios';

const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://api.example.com';

export const api = axios.create({
  baseURL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  config.headers['Content-Type'] = 'application/json';
  return config;
});
