import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import AddAboutProperty from '../features/addProperty/component/organisms/AddAboutProperty';

interface AboutAddPropertyPageProps {}

const AboutAddPropertyPage: React.FC<AboutAddPropertyPageProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start" gap={10}>
      <VStack w="full" alignItems="flex-start">
        <Heading as="h1" color="blue.500" fontWeight="medium">
          Informasi Umum
        </Heading>
        <Text color="gray.500" fontSize="lg">
          Tambahkan informasi umum properti anda, untuk memberi gambaran umum
          properti anda ke pembeli properti
        </Text>
      </VStack>
      <AddAboutProperty />
    </VStack>
  );
};

export default AboutAddPropertyPage;
