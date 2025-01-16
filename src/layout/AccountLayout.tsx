import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
  useToken,
} from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { FaBullhorn, FaUserCircle } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { Navbar } from '../components';

interface AccountLayoutProps {}

type AddPropertyLink = {
  label: string;
  to: string;
  icon: IconType;
};

const links: AddPropertyLink[] = [
  // {
  //   label: 'Setting Akun',
  //   to: '/account',
  //   icon: FaPen,
  // },
  {
    label: 'List Daftar Iklan',
    to: '/account/list-ads',
    icon: FaBullhorn,
  },
];

const AccountLayout: React.FC<AccountLayoutProps> = () => {
  const [blue500, blue600, blue50] = useToken('colors', [
    'blue.500',
    'blue.600',
    'blue.50',
  ]);
  return (
    <Box w="100%" h="100vh">
      <Navbar />

      <Grid
        templateColumns="repeat(12, 1fr)"
        w="full"
        as="main"
        h="calc(100vh - 88px)"
      >
        <GridItem
          bg="white"
          w="full"
          h="full"
          colSpan={3}
          p="10"
          overflow="scroll"
          borderRightStyle="solid"
          borderRightWidth={2}
          borderRightColor="gray.100"
        >
          <VStack gap={10} h="full">
            <HStack justifyContent="space-between" w="full">
              <Heading
                as="h2"
                size="lg"
                color="blackAlpha.900"
                fontWeight="medium"
              >
                List Iklan
              </Heading>
              <Icon as={FaUserCircle} w={10} h={10} color="blue.500" />
            </HStack>
            <Divider color="gray.300" />
            <VStack w="full" gap={6}>
              {links.map(({ to, label, icon }, index) => (
                <Link
                  as={NavLink}
                  key={`${to}-${index}`}
                  to={to}
                  w="full"
                  bg="transparent"
                  h="12"
                  minW="12"
                  fontSize="lg"
                  fontWeight="medium"
                  px="6"
                  display="flex"
                  alignItems="center"
                  borderRadius="md"
                  color="blue.500"
                  lineHeight="1.2"
                  cursor="pointer"
                  _hover={{ textDecoration: 'none', backgroundColor: blue50 }}
                  _activeLink={{
                    textDecoration: 'none',
                    backgroundColor: blue500,
                    color: 'white',
                    _hover: { backgroundColor: blue600 },
                  }}
                  end
                >
                  <Text textTransform="capitalize">{label}</Text>
                  <Icon as={icon} w={6} h={6} ml="auto" />
                </Link>
              ))}
            </VStack>
          </VStack>
        </GridItem>
        <GridItem
          w="full"
          h="full"
          colSpan={9}
          position="relative"
          p={10}
          overflow="scroll"
        >
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AccountLayout;
