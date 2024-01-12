import { Flex, Heading, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.png';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <Flex as={Link} to="/">
      <Image src={LogoImage} alt="Logo" w="50px" />
      <Heading as="h1" size="lg">
        GeoProperty
      </Heading>
    </Flex>
  );
};

export default Logo;
