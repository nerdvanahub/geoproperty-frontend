import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { TBaseCustomInputType } from '../../types/customInputType';

interface CustomNumberInputProps extends Omit<TBaseCustomInputType, 'value'> {
  value?: number;
  max?: number;
  min?: number;
}

const CustomNumberInput: React.FC<CustomNumberInputProps> = ({
  label,
  onChange,
  value = 0,
  placeholder,
  name,
  helperText,
  errorMessage,
  isInvalid = false,
  max,
  min,
}) => {
  const [number, setNumber] = React.useState<number>(value);

  React.useEffect(() => {
    onChange && onChange(number.toString());
  }, [number, onChange]);

  useEffect(() => {
    setNumber(value);
  }, [value]);

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <InputGroup size="lg">
        <InputLeftElement>
          <IconButton
            icon={<FaMinus />}
            aria-label={'decrease number'}
            variant="ghost"
            colorScheme="blue"
            onClick={(e) => {
              e.preventDefault();
              setNumber((prevState) => {
                if (min === undefined) return prevState;
                if (prevState >= min) {
                  return prevState - 1;
                }
                return prevState;
              });
            }}
          />
        </InputLeftElement>
        <Input
          name={name}
          value={value || number}
          readOnly
          placeholder={placeholder}
          _disabled={{ borderColor: 'gray.200', cursor: 'not-allowed' }}
        />
        <InputRightElement>
          <IconButton
            icon={<FaPlus />}
            aria-label={'increase number'}
            variant="ghost"
            colorScheme="blue"
            onClick={(e) => {
              e.preventDefault();
              setNumber((prevState) => {
                if (max === undefined) return prevState;
                if (prevState <= max) {
                  return prevState + 1;
                }
                return prevState;
              });
            }}
          />
        </InputRightElement>
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomNumberInput;
