import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AddContactProperty } from '../features/addProperty';

interface AddContactPropertyPageProps {}

const AddContactPropertyPage: React.FC<AddContactPropertyPageProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start" gap={10}>
      <VStack alignItems="flex-start" w="full">
        <Heading as="h1" color="blue.500" size="xl">
          Kontak Penjual
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Pastikan masukan kontak dengan kontak sebenarnya dan akurat, agar
          calon pembeli dapat menghubungi untuk menanyakan seputar properti yang
          dijual
        </Text>
      </VStack>
      <AddContactProperty />
    </VStack>
  );
};

export default AddContactPropertyPage;
