import AsyncStorage from '@react-native-async-storage/async-storage';

import {Storage} from '../storage';

export const asyncStorage: Storage = {
  getItem: async key => {
    const item = await AsyncStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      return null;
    }
  },
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async key => {
    await AsyncStorage.removeItem(key);
  },
  clear: async () => {
    await AsyncStorage.clear();
  },
};
