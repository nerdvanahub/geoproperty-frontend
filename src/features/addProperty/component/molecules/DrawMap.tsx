import { Box, HStack, Input, VStack } from "@chakra-ui/react";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import * as turf from "@turf/turf";
import { FC, useEffect } from "react";
import Map from "../../../map";
import useMapStore from "../../../map/store/useMapStore";

interface DrawMapProps {}

const DrawMap: FC<DrawMapProps> = () => {
  // cara expose map menggunakan zustand
  const [map, setCentroid, centroid] = useMapStore((state) => [
    state.map,
    state.setCentroid,
    state.centroid,
  ]);

  useEffect(() => {
    if (!map) return;
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: "draw_polygon",
    });

    map.on("load", () => {
      map.addControl(draw);
    });

    // TODO: send geom to server

    const calculateArea = () => {
      const data = draw.getAll();
      if (data.features.length > 0) {
        const area = turf.area(data);
        const rounded_area = Math.round(area * 100) / 100; // m2
        console.log(rounded_area);
        for (const feature of data.features) {
          if (feature.geometry.type === "Polygon") {
            const geom = feature.geometry.coordinates;
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

    map.on("draw.create", calculateArea);

    map.on("draw.update", calculateArea);

    map.on("draw.delete", calculateArea);
  }, [map]);

  return (
    <VStack w="full" alignItems="flex-start" gap={4}>
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
