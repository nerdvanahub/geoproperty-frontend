/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  ButtonProps,
  HStack,
  Heading,
  VStack,
  useToken,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaGraduationCap, FaStore, FaTrain } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";
import IconBank from "../../../assets/icon/Bank.png";
import IconBelanja from "../../../assets/icon/Belanja.png";
import IconRestoran from "../../../assets/icon/Restoran.png";
import IconRumahSakit from "../../../assets/icon/Rumah Sakit.png";
import IconSekolah from "../../../assets/icon/Sekolah.png";
import IconTransport from "../../../assets/icon/Transport.png";
import { layerName, sourceName } from "../../../config/constants/constants";
import Map from "../../map";
import useMapStore from "../../map/store/useMapStore";
import usePoi from "../hooks/usePoi";
import useDetailStore from "../store/useDetailStore";
import * as turf from "@turf/turf";
import mapboxGl from "mapbox-gl";
import ReactDOM from "react-dom/client";

interface POIPropertyProps {}

const ButtonAction = ({
  children,
  ...props
}: ButtonProps & {
  children: React.ReactNode;
}) => {
  const [blue500] = useToken("colors", ["blue.500"]);
  return (
    <Button
      bg="white"
      color="blue.500"
      _hover={{
        bg: blue500,
        color: "white",
      }}
      _active={{
        bg: blue500,
        color: "white",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

const POIProperty: React.FC<POIPropertyProps> = () => {
  const [map] = useMapStore((state) => [state.map]);
  const centroid = useDetailStore((state) => state.center_point);
  const point = turf.featureCollection([
    turf.point([centroid[0], centroid[1]]),
  ]);
  const buffer = turf.buffer(point, 2, { units: "kilometers" } as any);
  const polygon = useDetailStore((state) => state.geometry);
  const { data, isLoading } = usePoi();
  const iconPOI: any = {
    Sekolah: IconSekolah,
    "Rumah Sakit": IconRumahSakit,
    Restoran: IconRestoran,
    Belanja: IconBelanja,
    Transport: IconTransport,
    Bank: IconBank,
  };
  const popup = new mapboxGl.Popup({
    closeButton: false,
  });
  const containerPopupRef = useRef<HTMLElement | null>(null);

  const [activeButton, setActiveButton] = React.useState<string | null>(null);

  const handleButtonClick = (category: string) => {
    setActiveButton(category === activeButton ? null : category);
    map?.setFilter(layerName.poiLayer, [
      "match",
      ["get", "kategori"],
      category == "Semua"
        ? ["Sekolah", "Rumah Sakit", "Restoran", "Belanja", "Transport", "Bank"]
        : category,
      true,
      false,
    ]);
  };

  React.useEffect(() => {
    if (map && centroid) {
      map.flyTo({
        center: [centroid[0], centroid[1]!],
        zoom: 15,
      });

      for (const icon in iconPOI) {
        map.loadImage(iconPOI[icon], (error, image) => {
          if (error) throw error;
          map.addImage(icon, image as any);
        });
      }

      map.on("load", () => {
        if (map.getSource(sourceName.poi)) {
          map.removeLayer(layerName.poiLayer);
          map.removeSource(sourceName.poi);
          map.removeLayer("polygon-detail-layer");
          map.removeSource("polygon-detail");
          map.removeLayer("buffer-layer");
          map.removeLayer("buffer-outline");
          map.removeSource("buffer");
        }

        map.addSource("buffer", {
          type: "geojson",
          data: buffer,
        });

        map.addLayer({
          id: "buffer-layer",
          type: "fill",
          source: "buffer",
          layout: {},
          paint: {
            "fill-color": "#3182CE", // blue color fill
            "fill-opacity": 0.15,
          },
        });

        map.addLayer({
          id: "buffer-outline",
          type: "line",
          source: "buffer",
          layout: {},
          paint: {
            "line-color": "#3182CE",
            "line-width": 2,
          },
        });

        map.addSource(sourceName.poi, {
          type: "geojson",
          data: data as any,
        });

        map.on("mouseenter", layerName.poiLayer, (e) => {
          containerPopupRef.current = document.createElement("div");
          const { nama, jarak } = e.features![0].properties!;

          ReactDOM.createRoot(containerPopupRef.current).render(
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "14px",
              }}
            >
              <div>
                {nama} - {(jarak / 1000).toFixed(2)} Km
              </div>
            </div>
          );

          map.on("mouseleave", layerName.poiLayer, () => {
            containerPopupRef.current = null;
            popup.remove();
          });

          popup
            .setLngLat(e.lngLat)
            .setDOMContent(containerPopupRef.current)
            .addTo(map);
        });

        map.addLayer({
          id: layerName.poiLayer,
          type: "symbol",
          source: sourceName.poi,
          layout: {
            "icon-image": ["get", "kategori"],
            "icon-size": 0.7,
            "icon-allow-overlap": true,
          },
        });

        map.addSource("polygon-detail", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Polygon",
                  coordinates: polygon,
                },
              },
            ],
          },
        });

        map.addLayer({
          id: "polygon-detail-layer",
          type: "fill",
          source: "polygon-detail",
          layout: {},
          paint: {
            "fill-color": "#3182CE", // blue color fill
            "fill-opacity": 1,
          },
        });
      });
    }
  }, [centroid, map, data, isLoading]);
  return (
    <VStack alignItems="flex-start" w="full" gap={4}>
      <Heading as="h4" size="lg" fontWeight="semibold">
        Lokasi terdekat
      </Heading>
      <Box w="full" h={380} rounded="lg" overflow="hidden" position="relative">
        <HStack position="absolute" zIndex={10} gap={4} p={4}>
          <ButtonAction
            onClick={() => handleButtonClick("Semua")}
            isActive={activeButton === "Semua"}
          >
            Semua
          </ButtonAction>
          <ButtonAction
            onClick={() => handleButtonClick("Sekolah")}
            isActive={activeButton === "Sekolah"}
            leftIcon={<FaGraduationCap />}
          >
            Sekolah
          </ButtonAction>
          <ButtonAction
            onClick={() => handleButtonClick("Transportasi")}
            isActive={activeButton === "Transportasi"}
            leftIcon={<FaTrain />}
          >
            Transportasi
          </ButtonAction>
          <ButtonAction
            onClick={() => handleButtonClick("Restoran")}
            isActive={activeButton === "Restoran"}
            leftIcon={<IoMdRestaurant />}
          >
            Restoran
          </ButtonAction>
          <ButtonAction
            onClick={() => handleButtonClick("Rumah Sakit")}
            isActive={activeButton === "Rumah Sakit"}
            leftIcon={<GiHealthNormal />}
          >
            Rumah sakit
          </ButtonAction>
          <ButtonAction
            onClick={() => handleButtonClick("Belanja")}
            isActive={activeButton === "Belanja"}
            leftIcon={<FaStore />}
          >
            Belanja
          </ButtonAction>
          <ButtonAction
            onClick={() => handleButtonClick("Bank")}
            isActive={activeButton === "Bank"}
            leftIcon={<GiHealthNormal />}
          >
            Bank
          </ButtonAction>
        </HStack>
        <Map />
      </Box>
    </VStack>
  );
};

export default POIProperty;
