import { Avatar, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import useDetailStore from "../store/useDetailStore";

interface DetailSellerProps {}

const DetailSeller: FC<DetailSellerProps> = () => {
  const [name, image] = useDetailStore((state) => [
    state.full_name,
    state.full_name,
  ]);
  return (
    <VStack justifyContent="center" gap={8}>
      <VStack justifyContent="center">
        <Heading as="h3" color="blue.500">
          Hubungi Penjual!
        </Heading>
        <Text textAlign="center" color="gray.500">
          Langsung saja! hubungi penjual untuk menanyakan properti ini dan
          dapatkan properti
        </Text>
      </VStack>
      <VStack>
        <Avatar
          name={name}
          src={`https://assets.nerdvana-hub.or.id/property/${image}`}
          size="2xl"
          borderWidth={4}
          borderColor={"blue.500"}
        />
        <VStack>
          <Heading as="h4" size="md">
            {name}
          </Heading>
          <Text color="gray.500">Penjual</Text>
        </VStack>
      </VStack>
      <Button
        colorScheme="whatsapp"
        leftIcon={<FaWhatsapp />}
        w="full"
        maxW="300"
        as="a"
        href="https://wa.me/62895611952367"
        target="_blank"
      >
        Whatsapp Penjual
      </Button>
    </VStack>
  );
};

export default DetailSeller;
