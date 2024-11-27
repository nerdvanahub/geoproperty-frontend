import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import searchService from '../service/searchService';

const useSearchProperty = () => {
  const [params] = useSearchParams();
  const lat = params.get('lat');
  const lng = params.get('lng');
  const prompt = params.get('prompt');

  const queryClient = useQueryClient();

  const queryKey = ['search', lat, lng, prompt];

  const querySearch = useQuery({
    queryKey: ['search'],
    queryFn: () => {
      return prompt == null
        ? searchService.searchPropertyByLocation([Number(lat), Number(lng)])
        : searchService.searchPropertyByPrompt(prompt as string);
    },
  });

  const mutation = useMutation({
    mutationFn: (geom: number[][]) => {
      return searchService.searchPropertyByArea(geom);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
    },
  });

  return { propertySearch: querySearch, propertyAreaMutation: mutation };
};

export default useSearchProperty;
