import { CBTModule } from '@/types';
import { api } from './api';

export const cbtService = {
  list: () => api.get<CBTModule[]>('/cbt-modules'),
};
