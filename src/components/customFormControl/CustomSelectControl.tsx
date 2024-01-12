import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import React from 'react';
import CustomSelect, { CustomSelectProps } from '../CustomSelect/CustomSelect';

interface CustomSelectControlProps extends CustomSelectProps {
  label: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
}

const CustomSelectControl: React.FC<CustomSelectControlProps> = ({
  label,
  helperText,
  errorMessage,
  isInvalid,
  ...props
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <CustomSelect {...props} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomSelectControl;
