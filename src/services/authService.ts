import { LoginPayload, RegisterPayload } from '@/types';
import { api } from './api';

export const authService = {
  login: (payload: LoginPayload) => api.post('/auth/login', payload),
  register: (payload: RegisterPayload) => api.post('/auth/register', payload),
  forgotPassword: (email: string) => api.post('/auth/forgot-password', { email }),
  refresh: (refreshToken: string) => api.post('/auth/refresh-token', { refreshToken }),
  verifyEmail: (token: string) => api.post('/auth/verify-email', { token }),
};