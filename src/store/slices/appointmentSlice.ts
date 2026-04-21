import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appointment } from '@/types';

interface AppointmentState {
  appointments: Appointment[];
}

const initialState: AppointmentState = { appointments: [] };

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAppointments(state, action: PayloadAction<Appointment[]>) {
      state.appointments = action.payload;
    },
    addAppointment(state, action: PayloadAction<Appointment>) {
      state.appointments.push(action.payload);
    },
  },
});

export const { setAppointments, addAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
