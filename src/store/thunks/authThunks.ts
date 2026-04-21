import { AppThunk } from '../store';
import { authService } from '@/services/authService';
import { clearAuth, setAuthLoading, setTokens } from '../slices/authSlice';
import { storageService } from '@/services/storageService';

export const loginThunk = (email: string, password: string): AppThunk => async (dispatch) => {
  dispatch(setAuthLoading(true));
  try {
    const { data } = await authService.login({ email, password });
    const tokens = data.data;
    dispatch(setTokens(tokens));
    await storageService.saveTokens(tokens);
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const logoutThunk = (): AppThunk => async (dispatch) => {
  await storageService.clearTokens();
  dispatch(clearAuth());
};
