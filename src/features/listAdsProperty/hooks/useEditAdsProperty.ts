import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import listAddsService from '../service/listAdsService';

const useEditAdsProperty = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ['ads-property', id],
    queryFn: async () => {
      return await listAddsService.listAddsById(id!);
    },
  });

  return {
    data: data?.data,
    isLoading,
  };
};

export default useEditAdsProperty;
