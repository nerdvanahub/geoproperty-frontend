import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import * as turf from '@turf/turf';
import { FC, useEffect } from 'react';
import Map from '../../../map';
import useMapStore from '../../../map/store/useMapStore';
import useOverlap from '../../hooks/useOverlap';
import useOverlapStore from '../../store/useOverlapStore';

interface DrawMapProps {}

const DrawMap: FC<DrawMapProps> = () => {
  const overlapMutation = useOverlap();
  // cara expose map menggunakan zustand
  const [map, setCentroid, centroid] = useMapStore((state) => [
    state.map,
    state.setCentroid,
    state.centroid,
  ]);

  const [overalps] = useOverlapStore((state) => [state.overlaps]);

  useEffect(() => {
    if (!map) return;
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: 'draw_polygon',
    });

    map.on('load', () => {
      map.addControl(draw);
    });

    // TODO: send geom to server

    const calculateArea = () => {
      const data = draw.getAll();
      if (data.features.length > 0) {
        for (const feature of data.features) {
          if (feature.geometry.type === 'Polygon') {
            const geom = feature.geometry.coordinates;
            overlapMutation.mutate(geom as unknown as number[][]);
            const poly = turf.polygon(geom);
            const center = turf.centroid(poly);

            setCentroid(
              center.geometry.coordinates as [number, number],
              geom as unknown as number[][][]
            );
          }
        }
      }
    };

    map.on('draw.create', calculateArea);

    map.on('draw.update', calculateArea);

    map.on('draw.delete', calculateArea);
  }, [map]);

  return (
    <VStack w="full" alignItems="flex-start" gap={4}>
      {overalps && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Peta Overlaps</AlertTitle>
          <AlertDescription>Titik yg di pilih overlaps</AlertDescription>
        </Alert>
      )}
      <Box w="full" h={500} borderRadius={8} overflow="hidden">
        <Map />
      </Box>
      <HStack w="full">
        <Input disabled value={centroid?.[0] || 0} size="lg" />
        <Input disabled value={centroid?.[1] || 0} size="lg" />
      </HStack>
    </VStack>
  );
};

export default DrawMap;
