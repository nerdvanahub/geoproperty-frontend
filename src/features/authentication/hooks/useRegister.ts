import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import authService from '../services/authService';
import useRegisterStateStore from '../store/useRegisterStateStore';
import { IRegisterUser } from '../type/user-type';

const useRegister = () => {
  const setRegister = useRegisterStateStore((state) => state.setRegister);

  const registerMutation = useMutation({
    mutationFn: ({ email, password, name }: IRegisterUser) =>
      authService.register({ email, password, name }),
    onSuccess: () => {
      setRegister(true);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterUser>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = (value: IRegisterUser) => {
    registerMutation.mutate({ ...value });
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isSubmitting,
  };
};

export default useRegister;
