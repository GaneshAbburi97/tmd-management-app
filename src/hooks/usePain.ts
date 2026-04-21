import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const usePain = () => useSelector((state: RootState) => state.pain);
