import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthTokens } from '@/types';

interface AuthState {
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  tokens: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<AuthTokens>) {
      state.tokens = action.payload;
      state.isAuthenticated = true;
    },
    clearAuth(state) {
      state.tokens = null;
      state.isAuthenticated = false;
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setTokens, clearAuth, setAuthLoading } = authSlice.actions;
export default authSlice.reducer;
