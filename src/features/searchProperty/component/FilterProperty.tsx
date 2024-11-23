/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Switch,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { GeoJSONSource } from 'mapbox-gl';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsStars } from 'react-icons/bs';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { useParams, useSearchParams } from 'react-router-dom';
import { CustomSelect } from '../../../components';
import { layerName, sourceName } from '../../../config/constants/constants';
import { Property } from '../../../types/propertyType';
import debounce from '../../../utils/debounce';
import useMapStore from '../../map/store/useMapStore';
import fieldContent from '../content/fieldContent.json';
import searchService from '../service/searchService';
import RadioInput from './RadioInput';

interface IFilterForm {
  address: string;
  tipeIklan: string;
  tipeProperti: string;
  luasBangunanMin: number;
  luasBangunanMax: number;
  luasTanahMin: number;
  luasTanahMax: number;
  kamarTidur: number;
  kamarMandi: number;
}

interface FilterPropertyProps {
  setListProperty: React.Dispatch<React.SetStateAction<Property[] | undefined>>;
}

const FilterProperty: FC<FilterPropertyProps> = ({ setListProperty }) => {
  const [resetRadio, setResetRadio] = useState<boolean | undefined>();
  useParams();
  const toast = useToast();
  const [params] = useSearchParams();
  const { handleSubmit, register, control, reset } = useForm<IFilterForm>({
    defaultValues: {
      address: '',
      tipeIklan: '',
      tipeProperti: '',
      luasBangunanMin: undefined,
      luasBangunanMax: undefined,
      luasTanahMin: undefined,
      luasTanahMax: undefined,
      kamarTidur: 0,
      kamarMandi: 0,
    },
  });
  const map = useMapStore((state) => state.map);
  const [isChecked, setIsChecked] = useState(
    Boolean(localStorage.getItem('isAiChecked'))
  );

  const mutateFilterProperty = useMutation({
    mutationFn: (coordinate: number[]) =>
      searchService.searchPropertyByLocation(coordinate),
    onSuccess: (data) => {
      if (!map) return;

      const geoJsonSource = map.getSource(
        sourceName.resultProperty
      ) as GeoJSONSource;
      if (geoJsonSource) {
        geoJsonSource.setData(data as any);
        const tmpData: Property[] = [];
        data?.features.forEach((item) => {
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
        return;
      }
    },
  });

  const [prompt, setPrompt] = useState<string | null>(
    params.get('prompt') || null
  );

  const onSubmit = (data: IFilterForm) => {
    if (!map) return;

    const operator = [
      'all',
      data.tipeIklan ? ['==', ['get', 'type_ads'], data.tipeIklan] : true,
      data.tipeProperti
        ? ['==', ['get', 'type_property'], data.tipeProperti]
        : true,
      String(data.luasBangunanMin) !== '' && String(data.luasBangunanMax) !== ''
        ? [
            'all',
            ['<=', ['get', 'building_area'], Number(data.luasBangunanMax)],
            ['>=', ['get', 'building_area'], Number(data.luasBangunanMin)],
          ]
        : true,
      String(data.luasTanahMin) !== '' && String(data.luasTanahMax) !== ''
        ? [
            'all',
            ['<=', ['get', 'building_area'], Number(data.luasTanahMax)],
            ['>=', ['get', 'building_area'], Number(data.luasTanahMin)],
          ]
        : true,
      data.kamarTidur
        ? ['>=', ['get', 'bed_rooms'], Number(data.kamarTidur)]
        : true,
      data.kamarMandi
        ? ['>=', ['get', 'bath_rooms'], Number(data.kamarMandi)]
        : true,
    ];

    map.setFilter(layerName.polygonLayer, operator);
  };

  const onChange = (coordinate: string | number[] | undefined) => {
    if (!map) return;
    if (!Array.isArray(coordinate)) return;
    map.flyTo({
      center: [coordinate[0], coordinate[1]],
      zoom: 15,
    });
    mutateFilterProperty.mutate(coordinate);
  };

  const setPromptAi = (e: { target: { name: any; value: any } }) => {
    setPrompt(e.target.value);
  };

  const resetFilter = () => {
    if (!map) return;
    reset({
      address: '',
      tipeIklan: '',
      tipeProperti: '',
      luasBangunanMin: undefined,
      luasBangunanMax: undefined,
      luasTanahMin: undefined,
      luasTanahMax: undefined,
      kamarTidur: 0,
      kamarMandi: 0,
    });
    setResetRadio(true);
    map.setFilter(layerName.polygonLayer, null);
  };

  const loadOptions = (inputValue: string) => {
    const result = searchService.searchProperty(inputValue).then((res) => {
      return res.data?.map((item) => ({
        label: item.name,
        value: item.center_point,
      }));
    });
    return result;
  };
  const switchAiMode = (e: any) => {
    if (e.target.checked) {
      setIsChecked(true);
      localStorage.setItem('isAiChecked', 'true');
      toast({
        title: 'GeoRobot Aktif',
        description: 'Pencarian properti dengan Georobot telah aktif ',
        status: 'info',
        duration: 1200,
        position: 'bottom-right',
      });
    } else {
      setIsChecked(false);
      localStorage.setItem('isAiChecked', '');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fetchPropertyWithAI = (_arg0: string | null) => {
    throw new Error('Function not implemented.');
  };

  return (
    <VStack
      w="full"
      alignItems="start"
      gap="8"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <HStack justifyContent="space-between" alignItems="end" w="full">
        <Heading as="h1" size="lg">
          Filter Property
        </Heading>
        <Button variant="link" onClick={resetFilter} type="reset">
          Reset filter
        </Button>
      </HStack>
      <Box bg="blue.50" p="4" borderRadius="xl" width="full">
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormLabel htmlFor="enable-AI" display="flex" alignItems="center">
            Cari dengan GeoRobot
            <BsStars color="blue" />
          </FormLabel>
          <Switch
            id="enable-AI"
            isChecked={isChecked}
            marginLeft="10"
            onChange={switchAiMode}
          />
        </FormControl>
      </Box>
      {isChecked ? (
        <>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<BsStars />}
              margin={1}
              marginRight={-1}
            ></InputRightElement>
            <Input
              placeholder="Carikan saya rumah harga 150 juta"
              onChange={setPromptAi as any}
              name="search_input"
              padding={6}
              fontSize={['md']}
              value={prompt || ''}
            />
          </InputGroup>
          <Button
            colorScheme="blue"
            size="lg"
            type="submit"
            onClick={() => {
              fetchPropertyWithAI(prompt);
            }}
          >
            Cari properti
          </Button>
        </>
      ) : (
        <CustomSelect
          options={[]}
          placeholder="Masukan lokasi (Khusus daerah depok)"
          isClearable
          onChange={(value) => {
            onChange(value as number[]);
          }}
          optionsIcon={FaMapMarkerAlt}
          dropdownIndicator={FaSearch}
          loadOptions={debounce(loadOptions, 500)}
        />
      )}
      <Divider />
      <FormControl>
        <FormLabel color="gray.600">Tipe Iklan</FormLabel>
        <Controller
          name="tipeIklan"
          control={control}
          render={({ field }) => (
            <>
              <RadioInput
                name={field.name}
                onChange={field.onChange}
                options={fieldContent.tipeIklan}
                reset={resetRadio}
              />
            </>
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel color="gray.600">Tipe Properti</FormLabel>
        <Controller
          name="tipeProperti"
          control={control}
          render={({ field }) => (
            <>
              <RadioInput
                reset={resetRadio}
                name={field.name}
                onChange={field.onChange}
                options={fieldContent.tipeProperti}
              />
            </>
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Luas Bangunan (m2)</FormLabel>
        <HStack gap={4}>
          <Input {...register('luasBangunanMin')} type="number" />
          <Input {...register('luasBangunanMax')} type="number" />
        </HStack>
      </FormControl>
      <FormControl>
        <FormLabel>Luas Tanah (m2)</FormLabel>
        <HStack gap={4}>
          <Input {...register('luasTanahMin')} type="number" />
          <Input {...register('luasTanahMax')} type="number" />
        </HStack>
      </FormControl>
      <FormControl>
        <FormLabel color="gray.600">Kamar Tidur</FormLabel>
        <Controller
          name="kamarTidur"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <>
              <RadioInput
                reset={resetRadio}
                name={field.name}
                onChange={field.onChange}
                options={fieldContent.kamarTidur}
                gridTemplateColumns="5"
              />
            </>
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel color="gray.600">Kamar Mandi</FormLabel>
        <Controller
          name="kamarMandi"
          control={control}
          render={({ field }) => (
            <>
              <RadioInput
                reset={resetRadio}
                name={field.name}
                onChange={field.onChange}
                options={fieldContent.kamarMandi}
                gridTemplateColumns="5"
              />
            </>
          )}
        />
      </FormControl>
      <Button type="submit" bg="blue.500" w="full" color="white" size="lg">
        Filter
      </Button>
    </VStack>
  );
};

export default FilterProperty;
