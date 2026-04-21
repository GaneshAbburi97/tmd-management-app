import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PainRecord } from '@/types';

interface PainState {
  records: PainRecord[];
}

const initialState: PainState = { records: [] };

const painSlice = createSlice({
  name: 'pain',
  initialState,
  reducers: {
    setPainRecords(state, action: PayloadAction<PainRecord[]>) {
      state.records = action.payload;
    },
    addPainRecord(state, action: PayloadAction<PainRecord>) {
      state.records.unshift(action.payload);
    },
  },
});

export const { setPainRecords, addPainRecord } = painSlice.actions;
export default painSlice.reducer;
