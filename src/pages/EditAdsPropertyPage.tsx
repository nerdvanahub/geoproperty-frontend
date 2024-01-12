import { Button, VStack, useToken } from '@chakra-ui/react';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import CommonInformationProperty from '../features/listAdsProperty/component/CommonInformationProperty';
import EditAddressProperty from '../features/listAdsProperty/component/EditAddressProperty';
import EditContactProperty from '../features/listAdsProperty/component/EditContactProperty';
import EditDetailProperty from '../features/listAdsProperty/component/EditDetailProperty';
import EditImageAdsProperty from '../features/listAdsProperty/component/EditImageAdsProperty';
import HeadingEdit from '../features/listAdsProperty/component/HeadingEdit';

interface EditAdsPropertyPageProps {}

const EditAdsPropertyPage: React.FC<EditAdsPropertyPageProps> = () => {
  const [gray900] = useToken('colors', ['gray.900']);
  const [shadow] = useToken('shadows', ['md']);
  return (
    <VStack w="full" alignItems="flex-end" gap={8}>
      <HeadingEdit />
      <EditAddressProperty />
      <CommonInformationProperty />
      <EditDetailProperty />
      <EditImageAdsProperty />
      <EditContactProperty />
      <Button
        bg="gray.800"
        color="white"
        _hover={{ backgroundColor: gray900, shadow: shadow }}
        rightIcon={<FaChevronRight />}
      >
        Ubah Iklan Properti
      </Button>
    </VStack>
  );
};

export default EditAdsPropertyPage;
