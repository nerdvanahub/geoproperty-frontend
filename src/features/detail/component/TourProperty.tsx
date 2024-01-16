import {
    Box,
    Button,
    HStack,
    Heading,
    Icon,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    useDisclosure
} from '@chakra-ui/react';
import { FC } from 'react';
import { Tb360View } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export interface TourPropertyProps { }

const TourProperty: FC<TourPropertyProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const SampleNextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", color: "black" }}
                onClick={onClick}
            />
        );
    }

    const SamplePrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };
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
                        top="40%"
                        right="35%"
                    >
                        <Tb360View size="120px" />
                        <Button onClick={onOpen}>Mulai Jelajahi Tur Panorama</Button>
                    </Box>
                    <Modal size="full" onClose={onClose} isOpen={isOpen} bg="black">
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>
                                <Link to="#" onClick={onClose}>
                                    <Box display="flex" alignItems="center">
                                        <FaTimes />
                                        <Text> Close</Text>
                                    </Box>
                                </Link>
                            </ModalHeader>
                            <ModalBody>
                                <Image borderRadius="20px" objectFit="cover" height="790" width="900" margin="auto" src="https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                                <Box mt="5" maxWidth="800" mx="auto" >
                                    <Slider {...settings}>
                                        <Box>
                                            <Image borderRadius="20px" objectFit="cover" height="40" width="40" margin="auto" src="https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                                        </Box>
                                        <Box>
                                            <Image borderRadius="20px" objectFit="cover" height="40" width="40" margin="auto" src="https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                                        </Box>
                                        <Box>
                                            <Image borderRadius="20px" objectFit="cover" height="40" width="40" margin="auto" src="https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                                        </Box>
                                        <Box>
                                            <Image borderRadius="20px" objectFit="cover" height="40" width="40" margin="auto" src="https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                                        </Box>
                                        <Box>
                                            <Image borderRadius="20px" objectFit="cover" height="40" width="40" margin="auto" src="https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                                        </Box>
                                        <Box>
                                            <Image borderRadius="20px" objectFit="cover" height="40" width="40" margin="auto" src="https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Image>
                                        </Box>
                                    </Slider>
                                </Box>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Box>
            </Box>
        </VStack>
    );
};

export default TourProperty;
