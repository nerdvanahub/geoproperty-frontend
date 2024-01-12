import { SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import CardProperty from "./CardProperty";
import { Property } from "../../../types/propertyType";

interface ListPropertyProps {
  hidden?: boolean;
  data: Property[] | undefined;
}

const ListProperty: FC<ListPropertyProps> = ({ hidden = false, data }) => {
  return (
    <>
      <SimpleGrid
        display={hidden ? "none" : "grid"}
        minChildWidth="400px"
        p={10}
        gap="10"
        h="calc(100vh - 88px)"
        overflowY="scroll"
        position="relative"
      >
        {data?.map((property, index) => {
          // Limit the number of cards to 10
          if (index < 10) {
            return <CardProperty key={property.id} data={property} />;
          }
        })}
      </SimpleGrid>
    </>
  );
};

export default ListProperty;
