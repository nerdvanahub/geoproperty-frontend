import {
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchAdsPropertyProps {}

const SearchAdsProperty: React.FC<SearchAdsPropertyProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start" gap={4}>
      <Heading as="h1" color="blue.500" size="lg">
        List Daftar Iklan
      </Heading>
      <HStack w="full">
        <InputGroup size="lg">
          <Input placeholder="Enter amount" />
          <InputRightElement>
            <Icon color="blue.500" as={FaSearch} />
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="blue" size="lg">
          Cari Iklan
        </Button>
      </HStack>
    </VStack>
  );
};

export default SearchAdsProperty;
