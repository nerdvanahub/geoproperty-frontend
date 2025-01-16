import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  Container,
  Divider,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useBoolean,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LoginForm,
  RegisterForm,
} from '../../features/authentication/component';
import useRegisterStateStore from '../../features/authentication/store/useRegisterStateStore';
import useUserStore from '../../features/authentication/store/useUserStore';
import Logo from './Logo';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [
    hasRegister,
    setRegsiter,
    wrongPassword,
    setWrongPassword,
    emailExist,
    setEmailExist,
  ] = useRegisterStateStore((state) => [
    state.hasRegister,
    state.setRegister,
    state.wrongPassword,
    state.setWrongPassword,
    state.emailExist,
    state.setEmailExist,
  ]);
  const [hasLogin, username, setLogout] = useUserStore((state) => [
    state.hasLogin,
    state.user.name,
    state.setLogout,
  ]);

  const { onOpen, onClose, isOpen } = useDisclosure();
  const [toggleDaftar, setToggleDaftar] = useBoolean();
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (hasRegister) {
        setRegsiter(false);
      }
    }, 5000);

    if (hasRegister) {
      setToggleDaftar.toggle();
    }

    if (hasLogin) {
      onClose();
    }

    return () => clearTimeout(timer);
  }, [hasRegister, hasLogin]);
  return (
    <Box
      bg="white"
      w="100%"
      p="5"
      as="nav"
      borderBottomWidth={2}
      borderBottomStyle="solid"
      borderBottomColor="gray.100"
    >
      <Container maxW="full" display="flex" justifyContent="space-between">
        <Flex gap="16" alignItems="center">
          <Logo />
          <Flex gap="8">
            <Link color="gray.400" fontWeight="semibold">
              Dijual
            </Link>
            <Link color="gray.400" fontWeight="semibold">
              Disewa
            </Link>
          </Flex>
        </Flex>
        <Flex gap="2">
          <Button
            as={NavLink}
            to="/add-property"
            bgGradient="linear(to-r, blue.500, blue.600)"
            _hover={{
              bgGradient: 'linear(to-r, blue.600, blue.700)',
            }}
            color="white"
            size="lg"
          >
            Iklankan Properti
          </Button>
          {hasLogin ? (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<FaChevronDown />}
                variant="outline"
                colorScheme="blue"
                size="lg"
              >
                {username}
              </MenuButton>
              <MenuList>
                <MenuItem as={NavLink} to={'/account/list-ads'}>
                  Informasi Akun
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    useUserStore.persist.clearStorage();
                    navigate(0);
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              size="lg"
              variant="outline"
              colorScheme="blue"
              leftIcon={<MdLogin />}
              onClick={onOpen}
            >
              Masuk/Daftar
            </Button>
          )}
        </Flex>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent padding="8" borderRadius="2xl">
          <ModalHeader display="grid" placeContent="center">
            <Logo />
          </ModalHeader>
          <ModalBody>
            <Divider mt="2" mb="6" />
            {hasRegister ? (
              <Alert status="success" mb={4} rounded="lg" position="relative">
                <AlertIcon />
                <AlertDescription>Register berhasil</AlertDescription>
                <CloseButton
                  position="absolute"
                  right={1}
                  top={1}
                  onClick={() => setRegsiter(false)}
                />
              </Alert>
            ) : null}

            {wrongPassword && (
              <Alert status="error" mb={4} rounded="lg" position="relative">
                <AlertIcon />
                <AlertDescription>Email / password salah</AlertDescription>
                <CloseButton
                  position="absolute"
                  right={1}
                  top={1}
                  onClick={() => setWrongPassword(false)}
                />
              </Alert>
            )}

            {emailExist && (
              <Alert status="error" mb={4} rounded="lg" position="relative">
                <AlertIcon />
                <AlertDescription>Email sudah digunakan</AlertDescription>
                <CloseButton
                  position="absolute"
                  right={1}
                  top={1}
                  onClick={() => setEmailExist(false)}
                />
              </Alert>
            )}

            {toggleDaftar ? (
              <RegisterForm onOpenRegister={setToggleDaftar.toggle} />
            ) : (
              <LoginForm onOpenLogin={setToggleDaftar.toggle} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
