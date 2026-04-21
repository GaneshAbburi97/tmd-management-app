import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoodEntry } from '@/types';

interface MoodState {
  entries: MoodEntry[];
}

const initialState: MoodState = { entries: [] };

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    setMoodEntries(state, action: PayloadAction<MoodEntry[]>) {
      state.entries = action.payload;
    },
    addMoodEntry(state, action: PayloadAction<MoodEntry>) {
      state.entries.unshift(action.payload);
    },
  },
});

export const { setMoodEntries, addMoodEntry } = moodSlice.actions;
export default moodSlice.reducer;
