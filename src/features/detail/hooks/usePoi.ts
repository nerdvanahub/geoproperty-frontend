import { useQuery } from '@tanstack/react-query';
import listAddsService from '../../listAdsProperty/service/listAdsService';
import useDetailStore from '../store/useDetailStore';

const usePoi = () => {
  const centroid = useDetailStore((state) => state.center_point);

  const detailQuery = useQuery({
    queryKey: ['poi'],
    queryFn: () => listAddsService.poi(centroid),
    enabled: centroid[0] !== 0 && centroid[1] !== 0,
  });

  return detailQuery;
};

export default usePoi;
