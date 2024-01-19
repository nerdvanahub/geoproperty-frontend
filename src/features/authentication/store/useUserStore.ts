import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { secureStorage } from '../../../lib/encryptStorage';
import { User } from '../type/user-type';

interface UserAction {
  setLogin: (user: User) => void;
  setLogout: () => void;
}

const useUserStore = create<User & UserAction & { hasLogin: boolean }>()(
  persist(
    (set) => ({
      hasLogin: false,
      user: {
        id: 0,
        email: '',
        name: '',
        exp: 0,
      },
      refresh_token: '',
      token: '',
      setLogin: (user) =>
        set(() => ({
          hasLogin: true,
          user: { ...user.user },
          refresh_token: user.refresh_token,
          token: user.token,
        })),
      setLogout: () =>
        set({
          hasLogin: false,
          user: {
            id: 0,
            email: '',
            name: '',
            exp: 0,
        },
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => secureStorage),
    }
  )
);

export default useUserStore;
