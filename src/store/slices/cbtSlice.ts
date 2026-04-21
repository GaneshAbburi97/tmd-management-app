import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CBTModule } from '@/types';

interface CBTState {
  modules: CBTModule[];
  completedIds: string[];
}

const initialState: CBTState = { modules: [], completedIds: [] };

const cbtSlice = createSlice({
  name: 'cbt',
  initialState,
  reducers: {
    setModules(state, action: PayloadAction<CBTModule[]>) {
      state.modules = action.payload;
    },
    markModuleCompleted(state, action: PayloadAction<string>) {
      if (!state.completedIds.includes(action.payload)) state.completedIds.push(action.payload);
    },
  },
});

export const { setModules, markModuleCompleted } = cbtSlice.actions;
export default cbtSlice.reducer;
