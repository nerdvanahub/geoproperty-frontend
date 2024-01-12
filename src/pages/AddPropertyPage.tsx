import { Heading, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import AddAddressProperty from '../features/addProperty/component/organisms/AddAddressProperty';

interface AddPropertyPageProps {}

const AddPropertyPage: FC<AddPropertyPageProps> = () => {
  return (
    <VStack alignItems="flex-start" gap={10} w="full">
      <VStack alignItems="flex-start" w="full">
        <Heading as="h1" color="blue.500" size="xl">
          Alamat Lengkap Properti
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Tambahkan alamat properti anda karena lokasi adalah kunci, agar para
          pencari properti dapat dengan mudah menemukan properti Anda
        </Text>
      </VStack>
      <AddAddressProperty />
    </VStack>
  );
};

export default AddPropertyPage;
