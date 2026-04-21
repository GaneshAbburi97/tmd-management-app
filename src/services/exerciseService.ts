import { Exercise } from '@/types';
import { api } from './api';

export const exerciseService = {
  list: () => api.get<Exercise[]>('/exercises'),
  markComplete: (exerciseId: string) => api.post(`/exercises/${exerciseId}/complete`),
};
