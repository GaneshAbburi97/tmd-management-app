import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exercise } from '@/types';

interface ExerciseState {
  items: Exercise[];
  completedIds: string[];
}

const initialState: ExerciseState = { items: [], completedIds: [] };

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    setExercises(state, action: PayloadAction<Exercise[]>) {
      state.items = action.payload;
    },
    markExerciseCompleted(state, action: PayloadAction<string>) {
      if (!state.completedIds.includes(action.payload)) state.completedIds.push(action.payload);
    },
  },
});

export const { setExercises, markExerciseCompleted } = exerciseSlice.actions;
export default exerciseSlice.reducer;
