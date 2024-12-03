import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import React from 'react';
import { TBaseCustomInputType } from '../../types/customInputType';
import CustomCheckBox from '../customCheckbox/CustomCheckBox';

interface CustomCheckboxInputProps
  extends Omit<TBaseCustomInputType, 'value' | 'onChange'> {
  value?: string[];
  options: string[];
  onChange: (value: string[]) => void;
}

const CustomCheckboxInput: React.FC<CustomCheckboxInputProps> = ({
  label,
  options,
  onChange,
  value,
  helperText,
  errorMessage,
  isInvalid = false,
}) => {
  return (
    <FormControl isInvalid={isInvalid} w="full">
      <FormLabel>{label}</FormLabel>
      <CustomCheckBox options={options} onChange={onChange} value={value} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomCheckboxInput;
