import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import AddImageProperty from '../../addProperty/component/organisms/AddImageProperty';

interface EditImageAdsPropertyProps {}

const EditImageAdsProperty: React.FC<EditImageAdsPropertyProps> = () => {
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
      <VStack alignItems="flex-start" w="full">
        <Heading as="h2" color="blue.500" size="md">
          Gambar Properti
        </Heading>
      </VStack>
      <AddImageProperty hiddenButton />
    </VStack>
  );
};

export default EditImageAdsProperty;
