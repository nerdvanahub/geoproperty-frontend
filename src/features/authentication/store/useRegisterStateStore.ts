import { create } from 'zustand';

interface RegisterState {
  hasRegister: boolean;
  setRegister: (hasRegister: boolean) => void;
}

const useRegisterStateStore = create<RegisterState>((set) => ({
  hasRegister: false,
  setRegister: (hasRegister) => set({ hasRegister }),
}));

export default useRegisterStateStore;
