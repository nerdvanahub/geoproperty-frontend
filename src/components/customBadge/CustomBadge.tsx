import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface CustomBadgeProps {
  text: string;
  color: 'green' | 'red' | 'blue' | 'orange' | 'yellow';
}

const CustomBadge: FC<CustomBadgeProps> = ({ text, color }) => {
  const bgColor = () => {
    if (color === 'green') return 'green.500';
    if (color === 'red') return 'red.500';
    if (color === 'blue') return 'blue.500';
    if (color === 'orange') return 'orange.500';
    if (color === 'yellow') return 'yellow.500';
  };

  return (
    <Text
      bg={bgColor()}
      color="white"
      fontSize="xl"
      padding="5px 10px"
      fontWeight="medium"
      borderRadius={8}
    >
      {text}
    </Text>
  );
};

export default CustomBadge;
