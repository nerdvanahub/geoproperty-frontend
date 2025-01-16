import { Heading, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { CustomTextArea } from '../../../components';
import DrawMap from '../../addProperty/component/molecules/DrawMap';
import useMapStore from '../../map/store/useMapStore';
import { Property } from '../types';

interface EditAddressPropertyProps {
  control: Control<Property>;
  errors: FieldErrors<Property>;
  property: Property | undefined;
}

const EditAddressProperty: React.FC<EditAddressPropertyProps> = ({
  control,
  property,
}) => {
  const [map, setCentroid] = useMapStore((state) => [
    state.map,
    state.setCentroid,
  ]);

  useEffect(() => {
    if (property?.center_point && property?.geometry) {
      setCentroid(
        [property.center_point[0], property.center_point[1]],
        property.geometry as unknown as number[][][]
      );

      map?.flyTo({
        center: [property.center_point[0], property.center_point[1]],
        zoom: 17,
      });

      if (!map?.getSource('bebas-namanya')) {
        map?.addSource('bebas-namanya', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: property.geometry,
            },
          },
        });
        map?.addLayer({
          id: 'bebas-namanya-layer',
          type: 'fill',
          source: 'bebas-namanya',
          layout: {},
          paint: {
            'fill-color': '#3182ce',
            'fill-opacity': 0.5,
          },
        });
      }
    }
  }, [property]);

  return (
    <VStack
      w="full"
      alignItems="flex-start"
      p={8}
      borderWidth={1}
      borderColor="gray.300"
      rounded="lg"
      gap={4}
    >
      <Heading as="h2" color="blue.500" size="lg">
        Lokasi Iklan
      </Heading>
      <DrawMap />
      <Controller
        control={control}
        name="address"
        render={({ field }) => (
          <CustomTextArea
            label="Detail Alamat"
            placeholder="Isi detail alamat"
            onChange={field.onChange}
            name={field.name}
            value={field.value}
          />
        )}
      />
    </VStack>
  );
};

export default EditAddressProperty;
