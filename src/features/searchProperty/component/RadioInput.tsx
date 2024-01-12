import { Grid, useRadioGroup } from '@chakra-ui/react';
import { FC } from 'react';
import RadioItem from './RadioItem';

interface RadioInputProps {
  name: string;
  options: { value: string; content: string }[];
  onChange: (value: string) => void;
  gridTemplateColumns?: string;
  reset?: boolean;
}

const RadioInput: FC<RadioInputProps> = ({
  name,
  onChange,
  options,
  gridTemplateColumns = '2',
  reset,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <Grid
      templateColumns={`repeat(${gridTemplateColumns}, 1fr)`}
      w="full"
      gap="4"
      {...group}
    >
      {options.map((option) => {
        const radio = getRadioProps({ value: option.value });
        return (
          <RadioItem key={option.value} radioProps={radio} reset={reset}>
            {option.content}
          </RadioItem>
        );
      })}
    </Grid>
  );
};

export default RadioInput;
