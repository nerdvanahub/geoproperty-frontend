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
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { RiErrorWarningFill } from 'react-icons/ri';
import useLogin from '../hooks/useLogin';

interface LoginFormProps {
  onOpenLogin?: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onOpenLogin }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { errors, handleSubmit, isSubmitting, register, onSubmit } = useLogin();

  return (
    <>
      <HStack justifyContent="space-between" mb="6">
        <Heading as="h1" size="md">
          Masuk
        </Heading>
        <Button color="blue.500" onClick={onOpenLogin} variant="link">
          Daftar
        </Button>
      </HStack>
      <VStack
        as="form"
        gap="5"
        alignItems="flex-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <VStack gap="4" width="full">
          <FormControl isInvalid={errors.email !== undefined}>
            <Input
              placeholder="Email"
              size="lg"
              {...register('email', {
                required: { value: true, message: 'Email harus di isi' },
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
                placeholder="Password"
                type={show ? 'text' : 'password'}
                size="lg"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password harus di isi',
                  },
                })}
              />
              <InputRightElement>
                <IconButton
                  aria-label="show password"
                  variant="ghost"
                  color="blue.500"
                  onClick={handleClick}
                  icon={show ? <MdVisibility /> : <MdVisibilityOff />}
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
        </VStack>
        <Text>
          Lupa kata sandi ? <Link color="blue.500">Klik disini</Link>{' '}
        </Text>
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
          Login
        </Button>
        <Box position="relative" py="4" w="full">
          <Divider />
          <AbsoluteCenter px="4" bg="white">
            atau masuk dengan
          </AbsoluteCenter>
        </Box>
        <Button w="full" size="lg" variant="outline" leftIcon={<FcGoogle />}>
          Google
        </Button>
      </VStack>
    </>
  );
};

export default LoginForm;
