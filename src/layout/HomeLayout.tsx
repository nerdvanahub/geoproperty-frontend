import { Box, Container } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import useUserStore from '../features/authentication/store/useUserStore';

interface HomeLayoutProps { }

const HomeLayout: FC<HomeLayoutProps> = () => {
    const userToken = useUserStore((state) => state.token);
    const navigate = useNavigate();
    useEffect(() => {
        if (userToken === '') {
            navigate('/');
        }
    }, [userToken, navigate]);
    return (
        <Box bg="blue.600" w="100%" h="100vh" position="relative">
            <Navbar />
            <Container maxW="full" h="full" maxH="calc(100vh - 88px)" p="10">
                <Outlet />
            </Container>
        </Box>
    );
};

export default HomeLayout;
