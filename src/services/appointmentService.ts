import { Appointment } from '@/types';
import { api } from './api';

export const appointmentService = {
  list: () => api.get<Appointment[]>('/appointments'),
  create: (payload: Omit<Appointment, 'id'>) => api.post('/appointments', payload),
};
