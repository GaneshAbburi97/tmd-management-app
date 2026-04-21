import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthTokens } from '@/types';
import { STORAGE_KEYS } from '@/utils/constants';

export const storageService = {
  saveTokens: (tokens: AuthTokens) => AsyncStorage.setItem(STORAGE_KEYS.TOKENS, JSON.stringify(tokens)),
  getTokens: async (): Promise<AuthTokens | null> => {
    const raw = await AsyncStorage.getItem(STORAGE_KEYS.TOKENS);
    return raw ? (JSON.parse(raw) as AuthTokens) : null;
  },
  clearTokens: () => AsyncStorage.removeItem(STORAGE_KEYS.TOKENS),
  initOfflineDatabase: async () => Promise.resolve(),
};
