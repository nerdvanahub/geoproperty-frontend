import { Box } from '@chakra-ui/react';
import mapboxgl from 'mapbox-gl';
import { FC, useCallback, useRef } from 'react';
import useMapStore from '../store/useMapStore';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY as string;
console.log(import.meta.env.MAPBOX_KEY);

interface MapProps {
  hidden?: boolean;
}

const Map: FC<MapProps> = ({ hidden = false }) => {
  // const mapContainer = useRef<HTMLDivElement | null>(null);
  const [setMapStore, center, zoom] = useMapStore((state) => [
    state.setMap,
    state.center,
    state.zoom,
  ]);
  const map = useRef<mapboxgl.Map | null>(null);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   console.log('render map once');
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current!,
  //     style: 'mapbox://styles/mapbox/streets-v12',
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });
  // });

  const mapWrapper = useCallback(
    (wrapper: HTMLDivElement) => {
      if (wrapper === null) return;
      if (map.current) return;
      console.log('render map once');
      map.current = new mapboxgl.Map({
        container: wrapper,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [center[0], center[1]],
        zoom: zoom,
      });
      setMapStore(map.current);
    },
    [center, zoom]
  );

  return (
    <Box
      ref={mapWrapper}
      h="full"
      w="full"
      display={hidden ? 'none' : 'block'}
    />
  );
};

export default Map;
