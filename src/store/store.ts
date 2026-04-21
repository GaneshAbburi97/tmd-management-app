import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import painReducer from './slices/painSlice';
import exerciseReducer from './slices/exerciseSlice';
import cbtReducer from './slices/cbtSlice';
import moodReducer from './slices/moodSlice';
import appointmentReducer from './slices/appointmentSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    pain: painReducer,
    exercise: exerciseReducer,
    cbt: cbtReducer,
    mood: moodReducer,
    appointments: appointmentReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
