import { Box, Container } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

interface SearchLayoutProps {}

const SearchLayout: FC<SearchLayoutProps> = () => {
  return (
    <Box w="100%" h="100vh">
      <Navbar />
      <Container maxW="full" h="full" maxH="calc(100vh - 88px)" p="0">
        <Outlet />
      </Container>
    </Box>
  );
};

export default SearchLayout;
