import { AppThunk } from '../store';
import { exerciseService } from '@/services/exerciseService';
import { setExercises } from '../slices/exerciseSlice';

export const fetchExercisesThunk = (): AppThunk => async (dispatch) => {
  const { data } = await exerciseService.list();
  dispatch(setExercises(data));
};
