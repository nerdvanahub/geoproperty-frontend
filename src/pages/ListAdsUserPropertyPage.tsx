import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import ListAdsProperty from '../features/listAdsProperty/component/ListAdsProperty';

interface ListAdsUserPropertyPageProps {}

const ListAdsUserPropertyPage: React.FC<ListAdsUserPropertyPageProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start" gap={4}>
      <Heading as="h1" color="blue.500" size="lg">
        List Daftar Iklan
      </Heading>
      {/* <SearchAdsProperty /> */}
      <ListAdsProperty />
    </VStack>
  );
};

export default ListAdsUserPropertyPage;
