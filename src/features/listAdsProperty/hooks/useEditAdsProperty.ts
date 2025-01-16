import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import listAddsService from '../service/listAdsService';
import useEditAdsStore from '../store/useEditAdsStore';
import { Property } from '../types';

const useEditAdsProperty = () => {
  const { id } = useParams<{ id: string }>();
  const navigation = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ['ads-property', id],
    queryFn: async () => {
      return await listAddsService.listAddsById(id!);
    },
  });

  const [setSuccessEditAds] = useEditAdsStore((state) => [
    state.setSuccessEditAds,
  ]);

  const updateMutation = useMutation({
    mutationFn: async (data: Property) => {
      return await listAddsService.editAds(data);
    },
    onSuccess: () => {
      setSuccessEditAds(true);
      navigation('/account/list-ads');
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Property>();

  const onSubmit: SubmitHandler<Property> = (data) => {
    updateMutation.mutate(data);
  };

  useEffect(() => {
    if (data && data.data) {
      reset({
        ...data.data,
        furniture: data.data?.furniture ? 'full perabot' : 'tidak perabot',
      });
    }
  }, [data]);

  return {
    data: data?.data,
    isLoading,
    register,
    onSubmit: handleSubmit(onSubmit),
    handleSubmit,
    control,
    errors,
  };
};

export default useEditAdsProperty;
