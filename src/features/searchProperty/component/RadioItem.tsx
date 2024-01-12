import { Box, UseRadioProps, useRadio } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface RadioItemProps {
  children: ReactNode;
  reset?: boolean;
  radioProps: UseRadioProps;
}

const RadioItem: FC<RadioItemProps> = ({ children, radioProps, reset }) => {
  const { getInputProps, getRadioProps, state, htmlProps } =
    useRadio(radioProps);

  const input = getInputProps();
  const checkbox = getRadioProps();

  if (reset === undefined) {
    state.isChecked = radioProps.isChecked!;
  } else {
    state.isChecked = false;
  }

  return (
    <Box as="label" w="full" {...htmlProps}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        borderColor="blue.500"
        color={state.isChecked ? 'white' : 'blue.500'}
        bg={state.isChecked ? 'blue.500' : 'white'}
        px={5}
        py={3}
        display="flex"
        justifyContent="center"
        w="full"
        textTransform="capitalize"
      >
        {children}
      </Box>
    </Box>
  );
};

export default RadioItem;
