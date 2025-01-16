import { Button, VStack, useToken } from '@chakra-ui/react';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import CommonInformationProperty from '../features/listAdsProperty/component/CommonInformationProperty';
import EditAddressProperty from '../features/listAdsProperty/component/EditAddressProperty';
import EditContactProperty from '../features/listAdsProperty/component/EditContactProperty';
import EditDetailProperty from '../features/listAdsProperty/component/EditDetailProperty';
import HeadingEdit from '../features/listAdsProperty/component/HeadingEdit';
import useEditAdsProperty from '../features/listAdsProperty/hooks/useEditAdsProperty';

interface EditAdsPropertyPageProps {}

const EditAdsPropertyPage: React.FC<EditAdsPropertyPageProps> = () => {
  const [gray900] = useToken('colors', ['gray.900']);
  const [shadow] = useToken('shadows', ['md']);
  const { onSubmit, control, errors, data } = useEditAdsProperty();
  return (
    <VStack
      w="full"
      alignItems="flex-end"
      gap={8}
      as="form"
      onSubmit={onSubmit}
    >
      <HeadingEdit />
      <EditAddressProperty control={control} errors={errors} property={data} />
      <CommonInformationProperty control={control} errors={errors} />
      <EditDetailProperty control={control} errors={errors} />
      <EditContactProperty control={control} errors={errors} />
      <Button
        bg="gray.800"
        color="white"
        _hover={{ backgroundColor: gray900, shadow: shadow }}
        rightIcon={<FaChevronRight />}
        type="submit"
      >
        Ubah Iklan Properti
      </Button>
    </VStack>
  );
};

export default EditAdsPropertyPage;
