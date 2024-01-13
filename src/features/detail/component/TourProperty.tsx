import { Box, Button, HStack, Heading, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import CustomBadge from '../../../components/customBadge/CustomBadge';
import formatCurrency from '../../../utils/formatCurrency';
import useDetailStore from '../store/useDetailStore';
import { Tb360View } from "react-icons/tb";

export interface TourPropertyProps { }

const TourProperty: FC<TourPropertyProps> = () => {
    return (
        <VStack w="full" alignItems="flex-start">
            <Heading w="full" size="lg">
                Tour Property
            </Heading>
            <Box
                display="flex"
                alignItems="flex-end"
                justifyContent="center"
                width="90%"
                borderRadius="20px"
                height="100%"
            >
                <Box
                    position="relative"
                    top="0"
                    left="0"
                    _after={{
                        background: "rgba(0, 0, 0, 0.50) ",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        content: '""',
                        top: 0,
                        left: 0,
                        borderRadius: "20px",
                        alignContent: "center"
                    }}
                >
                    <Image borderRadius="20px" src="https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                    <Box
                        color="white"
                        position="absolute"
                        zIndex="20"
                        marginBottom="120px"
                        marginX="auto"
                        top="250"
                        right="450"
                    >
                        <Tb360View size="120px" />
                        <Button>Mulai Jelajahi Tur Panorama</Button>
                    </Box>
                </Box>
            </Box>
        </VStack>
    );
};

export default TourProperty;
