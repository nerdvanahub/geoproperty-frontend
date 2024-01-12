import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import listAddsService from '../../listAdsProperty/service/listAdsService';

const useDetail = () => {
  const { id } = useParams<{ id: string }>();

  const detailQuery = useQuery({
    queryKey: ['detail'],
    queryFn: () => listAddsService.listAddsById(id!),
  });

  return detailQuery;
};

export default useDetail;
