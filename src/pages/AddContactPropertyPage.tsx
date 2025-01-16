import { Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddContactProperty } from '../features/addProperty';
import usePhotoStore from '../features/addProperty/store/usePhotosStore';

interface AddContactPropertyPageProps {}

const AddContactPropertyPage: React.FC<AddContactPropertyPageProps> = () => {
  const [images] = usePhotoStore((state) => [state.photos]);

  const navigate = useNavigate();

  useEffect(() => {
    if (images.length === 0) {
      navigate('/add-property/image-property', { replace: true });
    }
  }, [images]);

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
