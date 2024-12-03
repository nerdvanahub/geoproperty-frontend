import {
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaBath, FaPen, FaTrash } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CustomBadge } from "../../../components";
import { Property } from "../../../types/propertyType";
import formatCurrency from "../../../utils/formatCurrency";
import useDeleteProperty from "../hooks/useDeleteProperty";

interface AdsCardPropertyProps {
  data: Property;
}

const AdsCardProperty: React.FC<AdsCardPropertyProps> = ({ data }) => {
  const { onDelete } = useDeleteProperty();

  return (
    <HStack
      h={190}
      borderWidth={0.5}
      w="full"
      borderColor="gray.300"
      rounded="lg"
      overflow={"hidden"}
    >
      <Image
        src={`https://assets.nerdvana-hub.or.id/property/${data.images[0].image}`}
        alt="ads"
        w={"60%"}
        objectFit="cover"
        h={"full"}
      />
      <VStack w="full" h="full" alignItems="flex-start" p={4}>
        <HStack h="full" justifyContent="flex-start" alignItems="flex-start">
          <Text
            bg="blue.50"
            color="blue.500"
            rounded="lg"
            fontSize="xl"
            padding="5px 10px"
            fontWeight="semibold"
          >
            {formatCurrency(data.price)}
          </Text>
          <CustomBadge color="green" text="dijual" />
        </HStack>
        <VStack alignItems="flex-start" w="full">
          <Heading size="md">{data.title_ads}</Heading>
          <Text>{data.address}</Text>
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
      <HStack p={4}>
        <IconButton
          icon={<FaPen />}
          aria-label="Edit"
          color="blue.500"
          bg="blue.50"
          as={Link}
          to={`/account/list-ads/${data.uuid}`}
        />
        <IconButton
          icon={<FaTrash />}
          aria-label="Hapus"
          color="red.500"
          bg="red.50"
          onClick={() => onDelete(data.uuid)}
        />
      </HStack>
    </HStack>
  );
};

export default AdsCardProperty;
