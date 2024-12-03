import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { Property } from "../../../types/propertyType";
import formatCurrency from "../../../utils/formatCurrency";

interface CardPropertyProps {
  data: Property;
}

const CardProperty: FC<CardPropertyProps> = ({ data }) => {
  return (
    <Box
      w="full"
      bg="white"
      shadow="md"
      borderRadius={8}
      h={"53vh"}
      overflow="hidden"
    >
      <Image
        src={`https://assets.nerdvana-hub.or.id/property/${data.images[0].image}`}
        alt="property"
        w="full"
        h="60%"
        objectFit="cover"
      />
      <VStack alignItems="flex-start" p="4">
        <HStack alignItems="center">
          <Text
            bg="blue.50"
            color="blue.500"
            fontSize="2xl"
            padding="5px 10px"
            fontWeight="medium"
            borderRadius={8}
          >
            {formatCurrency(data.price)}
          </Text>
          <Text
            bg="green.500"
            color="white"
            fontSize="xl"
            padding="5px 10px"
            fontWeight="medium"
            borderRadius={8}
          >
            {data.type_ads}
          </Text>
        </HStack>
        <VStack alignItems="flex-start">
          <Heading fontSize="lg" as="h1" fontWeight="semibold">
            {data.title_ads}
          </Heading>
          <Text fontSize="md" color="gray.400">
            {data.address}
          </Text>
        </VStack>
        <HStack>
          <HStack>
            <Icon as={FaBath} color="blue.500" />
            <Text>{data.bath_rooms}</Text>
          </HStack>
          <HStack>
            <Icon as={IoBed} color="blue.500" />
            <Text>{data.bed_rooms}</Text>
          </HStack>
          <HStack>
            <Text color="blue.500">LT</Text>
            <Text>{data.surface_area} M²</Text>
          </HStack>
          <HStack>
            <Text color="blue.500">LB</Text>
            <Text>{data.building_area} M²</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CardProperty;
