import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { FC } from 'react';

interface AddAdressProps {}

const AddAdress: FC<AddAdressProps> = () => {
  return (
    <FormControl isInvalid={true}>
      <FormLabel>Detail Alamat</FormLabel>
      <Textarea placeholder="Here is a sample placeholder" size="lg" />
      <FormErrorMessage>Contoh pesan error</FormErrorMessage>
    </FormControl>
  );
};

export default AddAdress;
