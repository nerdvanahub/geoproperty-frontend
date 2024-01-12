import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface HeadingEditProps {}

const HeadingEdit: React.FC<HeadingEditProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start">
      <Heading as="h1" size="xl" color="blue.500">
        Ubah Iklan Properti
      </Heading>
      <Text color="gray.500">
        Silahkan ubah iklan properti anda agar dapat menjadi lebih menarik
        dimata penjual
      </Text>
    </VStack>
  );
};

export default HeadingEdit;
