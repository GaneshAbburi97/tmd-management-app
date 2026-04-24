import { AppThunk } from '../store';
import { authService } from '@/services/authService';
import { RegisterPayload } from '@/types';
import { clearAuth, setAuthLoading, setTokens } from '../slices/authSlice';
import { storageService } from '@/services/storageService';

export const loginThunk = (email: string, password: string): AppThunk => async (dispatch) => {
  dispatch(setAuthLoading(true));
  try {
    const { data } = await authService.login({ email, password });
    const authTokens = data.data;
    dispatch(setTokens(authTokens));
    await storageService.saveTokens(authTokens);
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const registerThunk = (payload: RegisterPayload): AppThunk => async (dispatch) => {
  dispatch(setAuthLoading(true));
  try {
    await authService.register(payload);
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const logoutThunk = (): AppThunk => async (dispatch) => {
  await storageService.clearTokens();
  dispatch(clearAuth());
};