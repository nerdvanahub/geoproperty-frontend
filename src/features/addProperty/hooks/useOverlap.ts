import { useMutation } from '@tanstack/react-query';
import overlapsAreaService from '../services/overlapsAreaService';
import useOverlapStore from '../store/useOverlapStore';

const useOverlap = () => {
  const [setOverlaps] = useOverlapStore((state) => [state.setOverlaps]);
  const overlapMutation = useMutation({
    mutationFn: async (polygon: number[][]) => {
      return await overlapsAreaService.overlapsProperty(polygon);
    },
    onSuccess: (data) => {
      setOverlaps(data.data.overlaps);
    },
  });

  return overlapMutation;
};

export default useOverlap;
