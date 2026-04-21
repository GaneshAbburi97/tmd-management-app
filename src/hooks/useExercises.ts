import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const useExercises = () => useSelector((state: RootState) => state.exercise);
