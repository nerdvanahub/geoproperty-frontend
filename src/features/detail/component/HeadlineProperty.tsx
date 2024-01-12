import { HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import CustomBadge from '../../../components/customBadge/CustomBadge';
import formatCurrency from '../../../utils/formatCurrency';
import useDetailStore from '../store/useDetailStore';

export interface HeadlinePropertyProps {}

const HeadlineProperty: FC<HeadlinePropertyProps> = () => {
  const [
    buildingType,
    typeAds,
    typeProperty,
    price,
    titleAds,
    address,
    bathroom,
    bedroom,
    surfaceArea,
    buildingArea,
  ] = useDetailStore((state) => [
    state.building_type,
    state.type_ads,
    state.type_property,
    state.price,
    state.title_ads,
    state.address,
    state.bath_rooms,
    state.bed_rooms,
    state.surface_area,
    state.building_area,
  ]);
  return (
    <VStack w="full" gap={4} alignItems="flex-start">
      <HStack>
        <CustomBadge
          text={typeAds}
          color={typeAds === 'Sewa' ? 'orange' : 'green'}
        />
        <CustomBadge text={typeProperty} color="blue" />
        <CustomBadge text={buildingType} color="yellow" />
      </HStack>
      <VStack alignItems="flex-start">
        <Heading as="p" fontSize="4xl" fontWeight="semibold" color="blue.500">
          {formatCurrency(price)}
        </Heading>
        <Heading
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          color="blackAlpha.900"
        >
          {titleAds}
        </Heading>
        <HStack>
          <Icon as={FaMapMarkerAlt} color="gray.400" />
          <Text as="span" color="gray.400" fontSize="xl">
            {address}
          </Text>
        </HStack>
      </VStack>
      <HStack>
        <HStack>
          <Icon as={FaBath} color="blue.500" />
          <Text>{bathroom}</Text>
        </HStack>
        <HStack>
          <Icon as={IoBed} color="blue.500" />
          <Text>{bedroom}</Text>
        </HStack>
        <HStack>
          <Text color="blue.500">LT</Text>
          <Text>{surfaceArea} M²</Text>
        </HStack>
        <HStack>
          <Text color="blue.500">LB</Text>
          <Text>{buildingArea} M²</Text>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default HeadlineProperty;
