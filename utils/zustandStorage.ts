import { StateStorage } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

const zustandStorage: StateStorage = {
  setItem: async (name, value) => {
    await SecureStore.setItemAsync(name, value);
  },

  getItem: async (name) => {
    return await SecureStore.getItemAsync(name);
  },

  removeItem: async (name) => {
    await SecureStore.deleteItemAsync(name);
  },
};

export default zustandStorage;
