import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import decodeJwt from '../../../lib/decodeJwt';
import authService from '../services/authService';
import useUserStore from '../store/useUserStore';
import { ILoginUser, UserInformation } from '../type/user-type';

const useLogin = () => {
  const setLogin = useUserStore((state) => state.setLogin);

  const loginMutation = useMutation({
    mutationFn: ({ email, password }: ILoginUser) =>
      authService.login({ email, password }),
    onSuccess: ({ data }) => {
      const decodedJwt = decodeJwt<UserInformation>(data?.token || '');
      setLogin({
        refresh_token: data?.refresh_token || '',
        token: data?.token || '',
        user: {
          email: decodedJwt?.email || '',
          exp: decodedJwt?.exp || 0,
          id: decodedJwt?.id || 0,
          name: decodedJwt?.name || '',
        },
      });
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ILoginUser>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (value: ILoginUser) => {
    loginMutation.mutate({ email: value.email, password: value.password });
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isSubmitting,
  };
};

export default useLogin;
