import { Alert, AlertIcon, Heading, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ListAdsProperty from '../features/listAdsProperty/component/ListAdsProperty';
import useEditAdsStore from '../features/listAdsProperty/store/useEditAdsStore';

interface ListAdsUserPropertyPageProps {}

const ListAdsUserPropertyPage: React.FC<ListAdsUserPropertyPageProps> = () => {
  const [successEdit, setSuccessEditAds] = useEditAdsStore((state) => [
    state.successEditAds,
    state.setSuccessEditAds,
  ]);

  useEffect(() => {
    if (successEdit) {
      setTimeout(() => {
        setSuccessEditAds(false);
      }, 3000);
    }
  }, []);
  return (
    <VStack w="full" alignItems="flex-start" gap={4}>
      <Heading as="h1" color="blue.500" size="lg">
        List Daftar Iklan
      </Heading>
      {/* <SearchAdsProperty /> */}
      {successEdit && (
        <Alert status="success">
          <AlertIcon />
          Iklan Berhasil di simpan
        </Alert>
      )}
      <ListAdsProperty />
    </VStack>
  );
};

export default ListAdsUserPropertyPage;
