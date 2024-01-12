import { Grid, GridItem, Image } from '@chakra-ui/react';
import { FC } from 'react';
import useDetailStore from '../store/useDetailStore';

export interface GalleryImageProps {}

const GalleryImage: FC<GalleryImageProps> = () => {
  const images = useDetailStore((state) =>
    state.images.map((image) => image.image)
  );

  return (
    <Grid
      templateRows={'repeat(2, 1fr)'}
      templateColumns="repeat(12, 1fr)"
      gap={4}
      w="full"
      h="600px"
    >
      {images.map((image, index) => (
        <GridItem
          rowSpan={index === 0 ? 2 : 1}
          colSpan={index === 0 ? 6 : 3}
          key={`${index}-image`}
        >
          <Image
            src={`https://assets-geoproperty.nerdvana-hub.com/foto/${image}`}
            objectFit="cover"
            w="full"
            h={index === 0 ? 614 : 300}
            rounded="lg"
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default GalleryImage;
