import { Divider, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import AboutProperty from './AboutProperty';
import DetailAds from './DetailAds';
import FacilityProperty from './FacilityProperty';
import GalleryImage from './GalleryImage';
import HeadlineProperty from './HeadlineProperty';
import POIProperty from './POIProperty';
import TourProperty from './TourProperty';

interface DetailPropertyProps { }

const DetailProperty: FC<DetailPropertyProps> = () => {
    return (
        <VStack h={'full'} justifyContent="flex-start" gap={10}>
            <GalleryImage />
            <HeadlineProperty />
            <Divider />
            <AboutProperty />
            <Divider />
            <DetailAds />
            <Divider />
            <FacilityProperty />
            <Divider />
            <TourProperty />
            <Divider />
            <POIProperty />
            <Divider />
        </VStack>
    );
};

export default DetailProperty;
