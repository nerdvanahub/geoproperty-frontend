import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import AddImageProperty from '../features/addProperty/component/organisms/AddImageProperty';

interface AddImagePropertyPageProps {}

const AddImagePropertyPage: React.FC<AddImagePropertyPageProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start" gap={10}>
      <VStack alignItems="flex-start" w="full">
        <Heading as="h1" color="blue.500" size="xl">
          Gambar Properti
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Pencari properti akan mengabaikan jika tanpa foto. Buatlah iklan Anda
          lebih menarik dengan mengunggah foto-foto properti anda
        </Text>
      </VStack>
      <AddImageProperty />
    </VStack>
  );
};

export default AddImagePropertyPage;
