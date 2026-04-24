import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { RootState } from '@/store/store';
import { storageService } from '@/services/storageService';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setTokens } from '@/store/slices/authSlice';

const RootNavigator = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    storageService.getTokens().then((tokens) => {
      if (tokens?.accessToken && tokens.refreshToken) {
        dispatch(setTokens(tokens));
      }
    });
  }, [dispatch]);
console.log('ROOT isAuthenticated:', isAuthenticated);
  return <NavigationContainer>{isAuthenticated ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default RootNavigator;
