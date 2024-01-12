import { EncryptStorage } from 'encrypt-storage';
import { StateStorage } from 'zustand/middleware';

const key = import.meta.env.VITE_ENCRYPT_KEY!;
export const encryptStorage = new EncryptStorage(key);

export const secureStorage: StateStorage = {
  getItem: (name: string): string => {
    const value = encryptStorage.getItem(name);
    return JSON.stringify(value);
  },
  setItem: async (name: string, value: string) => {
    encryptStorage.setItem(name, value);
  },
  removeItem: async (name: string) => {
    encryptStorage.removeItem(name);
  },
};
