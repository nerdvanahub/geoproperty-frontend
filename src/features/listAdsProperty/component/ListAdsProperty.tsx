import { VStack } from '@chakra-ui/react';
import React from 'react';
import useListAdsProperty from '../hooks/useListAdsProperty';
import AdsCardProperty from './AdsCardProperty';

interface ListAdsPropertyProps {}

const ListAdsProperty: React.FC<ListAdsPropertyProps> = () => {
  const { data: properties, isLoading } = useListAdsProperty();

  return (
    <VStack w="full">
      {isLoading && <p>Loading...</p>}
      {properties?.map((property) => (
        <AdsCardProperty key={property.id} data={property} />
      ))}
    </VStack>
  );
};

export default ListAdsProperty;
