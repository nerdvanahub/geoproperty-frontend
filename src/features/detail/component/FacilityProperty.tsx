import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import useDetailStore from '../store/useDetailStore';

interface FacilityPropertyProps {}

const FacilityProperty: FC<FacilityPropertyProps> = () => {
  const [facilitysIndor, facilityOutDoor] = useDetailStore((state) => [
    state.facility_in_door,
    state.facility_out_door,
  ]);
  const facilitys = [...facilitysIndor, ...facilityOutDoor];

  return (
    <VStack w="full" justifyContent="flex-start" gap={8}>
      <Heading w="full" size="lg">
        Fasilitas Properti
      </Heading>
      <SimpleGrid columns={5} spacing={8} w="full">
        {facilitys.map((facility, index) => (
          <Box
            bg="blue.50"
            height="70px"
            display="grid"
            placeContent="center"
            rounded={8}
            key={`${facility}-${index}`}
          >
            <Text color="blue.500">{facility}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default FacilityProperty;
