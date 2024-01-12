import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import useDetailStore from '../store/useDetailStore';

interface AboutPropertyProps {}

const AboutProperty: FC<AboutPropertyProps> = () => {
  const about = useDetailStore((state) => state.description);
  return (
    <VStack alignItems="flex-start" w="full" gap={4}>
      <Heading as="h2" size="md" fontWeight="semibold">
        Tentang Iklan
      </Heading>
      <Text>{about}</Text>
      <Button variant="link" colorScheme="blue">
        Selengkapnya
      </Button>
    </VStack>
  );
};

export default AboutProperty;
