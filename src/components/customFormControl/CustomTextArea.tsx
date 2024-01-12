import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { FC } from 'react';
import { TBaseCustomInputType } from '../../types/customInputType';

interface CustomTextAreaProps extends TBaseCustomInputType {}

const CustomTextArea: FC<CustomTextAreaProps> = ({
  label,
  onChange,
  value,
  placeholder,
  name,
  helperText,
  errorMessage,
  isInvalid = false,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Textarea
        placeholder={placeholder}
        size="lg"
        name={name}
        value={value}
        onChange={(e) => {
          e.target.value && onChange && onChange(e.target.value);
        }}
        rows={5}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomTextArea;
