import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FC, FocusEventHandler, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { RiErrorWarningFill } from 'react-icons/ri';
import { TBaseCustomInputType } from '../../types/customInputType';

interface CustomTextFieldProps extends TBaseCustomInputType {
  type: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url';
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const CustomTextField: FC<CustomTextFieldProps> = ({
  label,
  onChange,
  value,
  placeholder,
  name,
  helperText,
  errorMessage,
  isInvalid = false,
  type = 'text',
  onBlur,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <InputGroup size="lg">
        {type !== 'password' ? (
          <Input
            placeholder={placeholder}
            type={type}
            size="lg"
            name={name}
            onChange={(e) => {
              onChange && onChange(e.target.value);
            }}
            value={value}
            onBlur={onBlur}
          />
        ) : (
          <Input
            placeholder="Password"
            type={show ? 'text' : 'password'}
            size="lg"
            name={name}
            onChange={(e) => {
              onChange && onChange(e.target.value);
            }}
            value={value}
          />
        )}
        {type === 'password' && (
          <InputRightElement>
            <IconButton
              aria-label="show password"
              variant="ghost"
              color="blue.500"
              onClick={handleClick}
              icon={show ? <MdVisibility /> : <MdVisibilityOff />}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errorMessage && (
        <FormErrorMessage
          bg="red.100"
          color="black"
          padding="4"
          rounded="lg"
          fontWeight="medium"
        >
          <Icon as={RiErrorWarningFill} mr="2" color="red.500" />
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomTextField;
