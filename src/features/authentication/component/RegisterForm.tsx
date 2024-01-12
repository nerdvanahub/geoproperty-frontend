import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  HStack,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useBoolean,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { RiErrorWarningFill } from 'react-icons/ri';
import useRegister from '../hooks/useRegister';

interface RegisterFormProps {
  onOpenRegister?: () => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ onOpenRegister }) => {
  const [visiblePassword, setVisiblePassword] = useBoolean();
  const [visiblePasswordConfirm, setVisiblePasswordConfirm] = useBoolean();

  const { errors, handleSubmit, isSubmitting, onSubmit, register } =
    useRegister();

  return (
    <>
      <HStack justifyContent="space-between" mb="6">
        <Heading as="h1" size="md">
          Daftar
        </Heading>
        <Button color="blue.500" onClick={onOpenRegister} variant="link">
          Masuk
        </Button>
      </HStack>
      <VStack
        as="form"
        gap="5"
        alignItems="flex-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <VStack gap="4" width="full">
          <FormControl isInvalid={errors.name !== undefined}>
            <Input
              placeholder="Nama Lengkap"
              size="lg"
              type="text"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Mohon masukan nama pengguna',
                },
              })}
            />
            <FormErrorMessage
              bg="red.100"
              color="black"
              padding="4"
              rounded="lg"
              fontWeight="medium"
            >
              <Icon as={RiErrorWarningFill} mr="2" color="red.500" />
              {errors.name?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email !== undefined}>
            <Input
              placeholder="Email"
              type="email"
              size="lg"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Mohon masukan email pengguna',
                },
              })}
            />
            <FormErrorMessage
              bg="red.100"
              color="black"
              padding="4"
              rounded="lg"
              fontWeight="medium"
            >
              <Icon as={RiErrorWarningFill} mr="2" color="red.500" />
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password !== undefined}>
            <InputGroup size="lg">
              <Input
                placeholder="Kata sandi"
                type={visiblePassword ? 'text' : 'password'}
                size="lg"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Mohon masukan kata sandi pengguna',
                  },
                })}
              />
              <InputRightElement>
                <IconButton
                  aria-label="show password"
                  variant="ghost"
                  color="blue.500"
                  onClick={setVisiblePassword.toggle}
                  icon={
                    visiblePassword ? <MdVisibility /> : <MdVisibilityOff />
                  }
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage
              bg="red.100"
              color="black"
              padding="4"
              rounded="lg"
              fontWeight="medium"
            >
              <Icon as={RiErrorWarningFill} mr="2" color="red.500" />
              {errors.password?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.confirmPassword !== undefined}>
            <InputGroup size="lg">
              <Input
                placeholder="Konfirmasi Kata Password"
                type={visiblePasswordConfirm ? 'text' : 'password'}
                size="lg"
                {...register('confirmPassword', {
                  required: {
                    value: true,
                    message: 'Mohon masukan konfirmasi kata sandi pengguna',
                  },
                })}
              />
              <InputRightElement>
                <IconButton
                  aria-label="show password"
                  variant="ghost"
                  color="blue.500"
                  onClick={setVisiblePasswordConfirm.toggle}
                  icon={
                    visiblePasswordConfirm ? (
                      <MdVisibility />
                    ) : (
                      <MdVisibilityOff />
                    )
                  }
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage
              bg="red.100"
              color="black"
              padding="4"
              rounded="lg"
              fontWeight="medium"
            >
              <Icon as={RiErrorWarningFill} mr="2" color="red.500" />
              {errors.confirmPassword?.message}
            </FormErrorMessage>
          </FormControl>
        </VStack>
        <Button
          bgGradient="linear(to-r, blue.500, blue.600)"
          _hover={{
            bgGradient: 'linear(to-r, blue.600, blue.700)',
          }}
          color="white"
          size="lg"
          width="full"
          type="submit"
          isLoading={isSubmitting}
        >
          Daftar
        </Button>
        <Box position="relative" py="4" w="full">
          <Divider />
          <AbsoluteCenter px="4" bg="white">
            atau daftar dengan
          </AbsoluteCenter>
        </Box>
        <Button w="full" size="lg" variant="outline" leftIcon={<FcGoogle />}>
          Google
        </Button>
      </VStack>
    </>
  );
};

export default RegisterForm;
