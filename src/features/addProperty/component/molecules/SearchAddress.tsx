import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import CustomSelect from "../../../../components/CustomSelect/CustomSelect";
import useMapStore from "../../../map/store/useMapStore";
import searchService from "../../../searchProperty/service/searchService";

interface SearchAddressProps {}

interface TOptionType {
  value: number[];
}

const SearchAddress: FC<SearchAddressProps> = () => {
  const map = useMapStore((state) => state.map);

  const { control, handleSubmit } = useForm<TOptionType>({
    defaultValues: {
      value: [0],
    },
  });

  const loadOptions = (inputValue: string) => {
    return new Promise((resolve) => {
      const result = searchService.searchProperty(inputValue).then((res) => {
        return res.data?.map((item) => ({
          label: item.name,
          value: item.center_point,
        }));
      });
      resolve(result);
    });
  };

  const onSubmit = (data: TOptionType) => {
    if (!map) return;
    map.flyTo({
      center: [data.value[0], data.value[1]!],
      zoom: 12,
    });
  };

  return (
    <VStack alignItems="flex-start" w="full" gap={4}>
      <Text fontSize="lg">Daerah Properti</Text>
      <HStack w="full" as="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="value"
          control={control}
          render={({ field }) => (
            <CustomSelect
              options={[]}
              placeholder="Masukan lokasi (Khusus daerah depok)"
              onChange={(value) => {
                field.onChange(value);
              }}
              isClearable
              optionsIcon={FaMapMarkerAlt}
              dropdownIndicator={FaSearch}
              loadOptions={loadOptions}
            />
          )}
        />
        <Button size="lg" colorScheme="blue" type="submit">
          Cari lokasi
        </Button>
      </HStack>
    </VStack>
  );
};

export default SearchAddress;
