import {
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaBath, FaCompass, FaCouch, FaParking } from 'react-icons/fa';
import { FaStairs } from 'react-icons/fa6';
import { IoBed } from 'react-icons/io5';
import { MdOutlineFlipToBack, MdOutlineTexture } from 'react-icons/md';
import useDetailStore from '../store/useDetailStore';

interface DetailAdsProps {}

type detailAdds = {
  title: string;
  value: string;
  icon: IconType;
};

const DetailAds: FC<DetailAdsProps> = () => {
  const [
    surfaceArea,
    parkArea,
    buildingArea,
    oriented,
    bathRooms,
    electricalPower,
    bedRooms,
    furniture,
    floors,
  ] = useDetailStore((state) => [
    state.surface_area,
    state.park_area,
    state.building_area,
    state.oriented,
    state.bath_rooms,
    state.electrical_power,
    state.bed_rooms,
    state.furniture,
    state.floors,
  ]);

  const listDetailProperty: detailAdds[] = [
    {
      title: 'Luas Tanah',
      value: `${surfaceArea} m²`,
      icon: MdOutlineTexture,
    },
    {
      title: 'Lahan Parkir',
      value: parkArea.toString(),
      icon: FaParking,
    },
    {
      title: 'Luas Bangunan',
      value: `${buildingArea} m²`,
      icon: MdOutlineFlipToBack,
    },
    {
      title: 'Orientasi Bangunan',
      value: oriented,
      icon: FaCompass,
    },
    {
      title: 'Kamar Mandi',
      value: bathRooms.toString(),
      icon: FaBath,
    },
    {
      title: 'Daya Listrik',
      value: `${electricalPower} VA`,
      icon: AiFillThunderbolt,
    },
    {
      title: 'Kamar Tidur',
      value: bedRooms.toString(),
      icon: IoBed,
    },
    {
      title: 'Perabot',
      value: furniture ? 'Full parabot' : 'Tanpa perabot',
      icon: FaCouch,
    },
    {
      title: 'Jumlah Lantai',
      value: floors.toString(),
      icon: FaStairs,
    },
  ];

  return (
    <VStack
      w="full"
      alignContent="flex-start"
      justifyContent="flex-start"
      gap={8}
    >
      <Heading as="h3" size="md" w="full">
        Rincian Properti
      </Heading>
      <SimpleGrid columns={2} spacing={8} w="full">
        {listDetailProperty.map((detail, index) => {
          // if (detail.value === '0') return null;
          return (
            <HStack
              height="50px"
              rounded="lg"
              justifyContent="space-between"
              p={4}
              border="2px"
              borderColor="gray.300"
              key={`${detail.title}-${index}`}
            >
              <HStack alignItems="center">
                <Icon as={detail.icon} color="blue.500" h={'24px'} w={'24px'} />
                <Text fontSize="lg">{detail.title}</Text>
              </HStack>
              <Text fontSize="md">{detail.value}</Text>
            </HStack>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default DetailAds;
