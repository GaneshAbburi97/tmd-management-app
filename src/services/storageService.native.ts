import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SQLite from 'expo-sqlite';
import { AuthTokens } from '@/types';
import { STORAGE_KEYS } from '@/utils/constants';

export const storageService = {
  saveTokens: (tokens: AuthTokens) => AsyncStorage.setItem(STORAGE_KEYS.TOKENS, JSON.stringify(tokens)),
  getTokens: async (): Promise<AuthTokens | null> => {
    const raw = await AsyncStorage.getItem(STORAGE_KEYS.TOKENS);
    return raw ? (JSON.parse(raw) as AuthTokens) : null;
  },
  clearTokens: () => AsyncStorage.removeItem(STORAGE_KEYS.TOKENS),
  initOfflineDatabase: async () => {
    const db = await SQLite.openDatabaseAsync('tmd_offline.db');
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS offline_pain_records (
        id TEXT PRIMARY KEY NOT NULL,
        payload TEXT NOT NULL,
        synced INTEGER NOT NULL DEFAULT 0
      );
    `);
  },
};
