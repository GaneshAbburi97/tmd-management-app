import { AppThunk } from '../store';
import { painService } from '@/services/painService';
import { setPainRecords } from '../slices/painSlice';

export const fetchPainRecordsThunk = (): AppThunk => async (dispatch) => {
  const { data } = await painService.list();
  dispatch(setPainRecords(data));
};
