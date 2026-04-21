import { AppThunk } from '../store';
import { cbtService } from '@/services/cbtService';
import { setModules } from '../slices/cbtSlice';

export const fetchCbtModulesThunk = (): AppThunk => async (dispatch) => {
  const { data } = await cbtService.list();
  dispatch(setModules(data));
};
