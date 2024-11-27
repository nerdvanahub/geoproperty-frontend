/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  ChakraProvider,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import * as turf from '@turf/turf';
import mapboxGl, { GeoJSONSource } from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { FaBath } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import { layerName, sourceName } from '../../../config/constants/constants';
import formatCurrency from '../../../utils/formatCurrency';
import { ResponseGeoJsonType } from '../../searchProperty/types/responseGeoJsonType';
import useMapStore from '../store/useMapStore';
import '../style/map.css';

interface useOnLoadMapProps {
  data: ResponseGeoJsonType | undefined;
  lat: string;
  lng: string;
}

const useOnLoadMap = ({ data, lat, lng }: useOnLoadMapProps) => {
  const containerPopupRef = useRef<HTMLElement | null>(null);
  const map = useMapStore((state) => state.map);

  // Check Checkboxes AI
  const isAiChecked = Boolean(localStorage.getItem('isAiChecked'));

  // Setup Center Point
  const points = data?.features?.map((item, index) => {
    const polygon = turf.polygon(item.geometry.coordinates);
    const point = turf.center(polygon as any);
    point.properties = {
      no: index + 1,
    };

    return point;
  });
  const pointsFeature = turf.featureCollection(points || []);

  useEffect(() => {
    if (data === null) return;
    if (!map) return;
    map.flyTo({
      center: [Number(lat), Number(lng)],
      zoom: isAiChecked ? 11 : 14,
    });

    const geoJsonSource = map.getSource(
      sourceName.resultProperty
    ) as GeoJSONSource;
    if (geoJsonSource) {
      geoJsonSource.setData(data as any);
    }

    const clusterSource = map.getSource('point_data') as GeoJSONSource;
    if (clusterSource) {
      clusterSource.setData(pointsFeature as any);
    }

    map.on('style.load', () => {
      if (map.getSource(sourceName.resultProperty)) {
        map.removeLayer(layerName.polygonLayer);
        map.removeLayer('polygon-outline');
        map.removeSource(sourceName.resultProperty);
      }

      if (map.getSource('point_data')) {
        map.removeLayer('clusters');
        map.removeLayer('cluster-count');
        map.removeLayer('unclustered-point');
        map.removeSource('point_data');
      }
      if (isAiChecked) {
        // add the point_count property to your source data.
        map.addSource('point_data', {
          type: 'geojson',
          data:
            pointsFeature === null
              ? { type: 'FeatureCollection', features: [] }
              : pointsFeature,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        });

        map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'point_data',
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': [
              'step',
              ['get', 'point_count'],
              '#51bbd6',
              100,
              '#f1f075',
              750,
              '#f28cb1',
            ],
            'circle-radius': [
              'step',
              ['get', 'point_count'],
              20,
              100,
              30,
              750,
              40,
            ],
          },
          layout: {
            visibility: 'visible',
          },
        });

        map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'point_data',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': ['get', 'point_count_abbreviated'],
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12,
          },
        });

        map.addLayer({
          id: 'unclustered-point',
          type: 'circle',
          source: 'point_data',
          filter: ['!', ['has', 'point_count']],
          paint: {
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff',
          },
          layout: {
            visibility: 'none',
          },
        });
      }

      map.addSource(sourceName.resultProperty, {
        type: 'geojson',
        data:
          data === null
            ? {
                type: 'FeatureCollection',
                features: [],
              }
            : (data as any),
      });

      map.addLayer({
        id: layerName.polygonLayer,
        type: 'fill',
        source: sourceName.resultProperty, // reference the data source
        paint: {
          'fill-color': 'gray', // blue color fill
          'fill-opacity': 0.3,
        },
      });

      map.addLayer({
        id: 'polygon-outline',
        type: 'line',
        source: sourceName.resultProperty,
        layout: {},
        paint: {
          'line-color': [
            'match',
            ['get', 'type_property'],
            'Rumah',
            '#38A169',
            'Apartemen',
            '#DD6B20',
            '#11b4da',
          ],
          'line-width': 4,
        },
      });

      const popup = new mapboxGl.Popup({
        maxWidth: '400px',
        closeButton: false,
      });

      map.on('click', layerName.polygonLayer, (e) => {
        containerPopupRef.current = document.createElement('div');
        const property = e.features![0].properties!;
        const images = JSON.parse(property.images);

        ReactDOM.createRoot(containerPopupRef.current).render(
          <ChakraProvider>
            <VStack
              w={270}
              rounded="lg"
              alignItems="flex-start"
              overflow="hidden"
              bg="white"
            >
              <Image
                src={`https://assets-geoproperty.nerdvana-hub.com/foto/${images[0]
                  .image!}`}
                alt="hehe"
                w="full"
                h={120}
                objectFit={'cover'}
              />
              <VStack w="full" alignItems="flex-start" p={4} h="full">
                <Text bg="blue.50" py="1" px="2" color="blue.500" rounded="lg">
                  {formatCurrency(property.price)}
                </Text>
                <Box>
                  <Link
                    fontSize="large"
                    href={`/search/detail/${property.uuid}`}
                  >
                    {property.title_ads}
                  </Link>
                  <Text fontSize="sm" color="gray.500">
                    {property.address}
                  </Text>
                </Box>
                <HStack>
                  <HStack>
                    <Icon as={FaBath} color="blue.500" />
                    <Text>{property.bath_rooms}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={IoBed} color="blue.500" />
                    <Text>{property.bed_rooms}</Text>
                  </HStack>
                  <HStack>
                    <Text color="blue.500">LT</Text>
                    <Text>{property.surface_area} M²</Text>
                  </HStack>
                  <HStack>
                    <Text color="blue.500">LB</Text>
                    <Text>{property.building_area} M²</Text>
                  </HStack>
                </HStack>
              </VStack>
            </VStack>
          </ChakraProvider>
        );

        popup
          .setLngLat(e.lngLat)
          .setDOMContent(containerPopupRef.current)
          .addTo(map);
      });
    });
  }, [data, pointsFeature, lat, lng, map, isAiChecked]);
};

export default useOnLoadMap;
