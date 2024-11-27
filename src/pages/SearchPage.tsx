/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Grid, GridItem } from "@chakra-ui/react";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";
import { FC, useEffect, useState } from "react";
import { FaListUl, FaMapMarkerAlt } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import Map from "../features/map";
import useOnLoadMap from "../features/map/hooks/useOnLoadMap";
import useMapStore from "../features/map/store/useMapStore";
import FilterProperty from "../features/searchProperty/component/FilterProperty";
import ListProperty from "../features/searchProperty/component/ListProperty";
import useSearchProperty from "../features/searchProperty/hooks/useSearchProperty";
import { Property } from "../types/propertyType";

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = () => {
  const [toggleMap, setToggleMap] = useState(true);
  const { data } = useSearchProperty();
  const [params, setParams] = useSearchParams();
  const map = useMapStore((state) => state.map);
  const lat = params.get("lat");
  const lng = params.get("lng");

  useOnLoadMap({ data, lat: lat!, lng: lng! });

  const [listProperty, setListProperty] = useState<Property[]>();

  useEffect(() => {
    setListProperty([]);
    const tmpData: Property[] = [];
    data?.features?.forEach((item) => {
      tmpData.push({
        id: item.properties.id,
        uuid: item.properties.uuid,
        user_id: item.properties.user_id,
        images: item.properties.images,
        title_ads: item.properties.title_ads,
        type_ads: item.properties.type_ads,
        type_property: item.properties.type_property,
        address: item.properties.address,
        condition: item.properties.condition,
        description: item.properties.description,
        price: item.properties.price,
        rent_type: item.properties.rent_type,
        building_type: item.properties.building_type,
        surface_area: item.properties.surface_area,
        building_area: item.properties.building_area,
        bath_rooms: item.properties.bath_rooms,
        bed_rooms: item.properties.bed_rooms,
        floors: item.properties.floors,
        park_area: item.properties.park_area,
        furniture: item.properties.furniture,
        electrical_power: item.properties.electrical_power,
        oriented: item.properties.oriented,
        certificate: item.properties.certificate,
        facility_in_door: item.properties.facility_in_door,
        facility_out_door: item.properties.facility_out_door,
        full_name: item.properties.full_name,
        email: item.properties.email,
        phone_number: item.properties.phone_number,
        center_point: item.properties.center_point,
        kelurahan: item.properties.kelurahan,
        kecamatan: item.properties.kecamatan,
        city: item.properties.city,
        geometry: item.properties.geometry,
        user: item.properties.user,
      });
    });
    setListProperty(tmpData);
  }, [data]);

  useEffect(() => {
    if (!map) return;
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
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
            console.log(geom);

            setParams({
              lat: center.geometry.coordinates[0].toString(),
              lng: center.geometry.coordinates[1].toString(),
            });
          }
        }
      }
    };

    map.on("draw.create", calculateArea);

    map.on("draw.update", calculateArea);

    map.on("draw.delete", calculateArea);
  }, [map]);

  return (
    <Grid templateColumns="repeat(12, 1fr)" h="full" w="full" as="main">
      <GridItem
        bg="white"
        w="full"
        h="full"
        colSpan={4}
        p="10"
        overflow="scroll"
        borderRightStyle="solid"
        borderRightWidth={2}
        borderRightColor="gray.100"
      >
        <FilterProperty setListProperty={setListProperty} />
      </GridItem>
      <GridItem w="full" h="full" colSpan={8} position="relative">
        <Button
          bg="black"
          color="white"
          _hover={{
            bg: "gray.800",
          }}
          position="fixed"
          right="2%"
          bottom={10}
          size="lg"
          leftIcon={toggleMap ? <FaListUl /> : <FaMapMarkerAlt />}
          zIndex={10}
          onClick={() => {
            setToggleMap(!toggleMap);
          }}
        >
          {toggleMap ? "List Property" : "Map Property"}
        </Button>
        <Map hidden={!toggleMap} />
        <ListProperty hidden={toggleMap} data={listProperty} />
        {/* {toggleMap ? <Map /> : <ListProperty />} */}
      </GridItem>
    </Grid>
  );
};

export default SearchPage;
