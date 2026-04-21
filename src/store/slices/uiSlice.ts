import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  loading: boolean;
  error: string | null;
}

const initialState: UiState = { loading: false, error: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setGlobalLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setGlobalError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setGlobalLoading, setGlobalError } = uiSlice.actions;
export default uiSlice.reducer;
