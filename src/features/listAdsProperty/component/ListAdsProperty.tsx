import { VStack } from "@chakra-ui/react";
import React from "react";
import AdsCardProperty from "./AdsCardProperty";
import { Property } from "../../../types/propertyType";
import listAddsService from "../service/listAdsService";

interface ListAdsPropertyProps {}

const ListAdsProperty: React.FC<ListAdsPropertyProps> = () => {
  const [properties, setProperties] = React.useState([] as Property[]);

  const fetchAdsProperty = async () => {
    const listAdsProperty = await listAddsService.listAdds();

    setProperties(listAdsProperty.data!);
  };

  React.useEffect(() => {
    fetchAdsProperty();
  }, [properties]);

  return (
    <VStack w="full">
      {properties.map((property) => (
        <AdsCardProperty key={property.id} data={property} />
      ))}
    </VStack>
  );
};

export default ListAdsProperty;
