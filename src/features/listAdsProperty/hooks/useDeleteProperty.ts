import { useMutation, useQueryClient } from '@tanstack/react-query';
import listAddsService from '../service/listAdsService';

export default function useDeleteProperty() {
  const queryClient = useQueryClient();
  const property = useMutation({
    mutationFn: async (id: string) => {
      await listAddsService.deleteProperty(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listAds'] });
    },
  });

  const onDelete = (id: string) => {
    property.mutate(id);
  };

  return { onDelete };
}
