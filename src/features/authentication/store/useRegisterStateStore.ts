import { create } from 'zustand';

interface RegisterState {
  hasRegister: boolean;
  setRegister: (hasRegister: boolean) => void;
  wrongPassword: boolean;
  setWrongPassword: (wrongPassword: boolean) => void;
  emailExist: boolean;
  setEmailExist: (emailExist: boolean) => void;
}

const useRegisterStateStore = create<RegisterState>((set) => ({
  hasRegister: false,
  setRegister: (hasRegister) => set({ hasRegister }),
  wrongPassword: false,
  setWrongPassword: (wrongPassword) => set({ wrongPassword }),
  emailExist: false,
  setEmailExist: (emailExist) => set({ emailExist }),
}));

export default useRegisterStateStore;
