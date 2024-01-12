import {
  Box,
  Grid,
  Text,
  UseCheckboxProps,
  useCheckbox,
  useCheckboxGroup,
} from '@chakra-ui/react';
import React from 'react';

interface CustomCheckBoxProps {
  options: string[];
  onChange: (value: string[]) => void;
  value?: string;
}

const CheckBox = ({
  children,
  ...props
}: UseCheckboxProps & {
  children: React.ReactNode;
}) => {
  const { htmlProps, getCheckboxProps, state, getInputProps, getLabelProps } =
    useCheckbox(props);

  return (
    <Box as="label" w="full" {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Box
        {...getCheckboxProps()}
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
        <Text {...getLabelProps()}>{children}</Text>
      </Box>
    </Box>
  );
};

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  options,
  onChange,
}) => {
  const { getCheckboxProps } = useCheckboxGroup({
    onChange: onChange,
  });

  return (
    <Grid templateColumns="repeat(5,1fr)" gap={4} w="full">
      {options.map((option, index) => {
        return (
          <CheckBox key={index} {...getCheckboxProps({ value: option })}>
            {option}
          </CheckBox>
        );
      })}
    </Grid>
  );
};

export default CustomCheckBox;
