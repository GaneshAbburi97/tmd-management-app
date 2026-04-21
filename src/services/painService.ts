import { PainRecord } from '@/types';
import { api } from './api';

export const painService = {
  list: () => api.get<PainRecord[]>('/pain-records'),
  create: (payload: Omit<PainRecord, 'id'>) => api.post('/pain-records', payload),
};
