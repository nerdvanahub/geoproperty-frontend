import { useQuery } from '@tanstack/react-query';
import listAddsService from '../service/listAdsService';

const useListAdsProperty = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['listAds'],
    queryFn: async () => {
      return await listAddsService.listAdds();
    },
  });

  return {
    data: data?.data,
    isLoading,
  };
};

export default useListAdsProperty;
