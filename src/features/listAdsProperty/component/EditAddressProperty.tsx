import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { CustomTextArea } from '../../../components';
import DrawMap from '../../addProperty/component/molecules/DrawMap';
import SearchAddress from '../../addProperty/component/molecules/SearchAddress';

interface EditAddressPropertyProps {}

const EditAddressProperty: React.FC<EditAddressPropertyProps> = () => {
  return (
    <VStack
      w="full"
      alignItems="flex-start"
      p={8}
      borderWidth={1}
      borderColor="gray.300"
      rounded="lg"
      gap={4}
    >
      <Heading as="h2" color="blue.500" size="lg">
        Lokasi Iklan
      </Heading>
      <SearchAddress />
      <DrawMap />
      <CustomTextArea
        label="Detail Alamat"
        placeholder="Isi detail alamat"
        onChange={(value) => {
          console.log(value);
        }}
      />
    </VStack>
  );
};

export default EditAddressProperty;
