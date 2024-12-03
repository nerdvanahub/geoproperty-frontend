import { Button, VStack, useToken } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CustomTextArea } from '../../../../components';
import useMapStore from '../../../map/store/useMapStore';
import useAddPropertyStore from '../../store/useAddPropertyStore';
import useOverlapStore from '../../store/useOverlapStore';
import DrawMap from '../molecules/DrawMap';
import SearchAddress from '../molecules/SearchAddress';

interface AddAddressPropertyProps {}

const AddAddressProperty: FC<AddAddressPropertyProps> = () => {
  const [centroid, geometry] = useMapStore((state) => [
    state.centroid,
    state.geometry,
  ]);

  const [overalps] = useOverlapStore((state) => [state.overlaps]);

  const setAddress = useAddPropertyStore((state) => state.setAddress);
  const navigate = useNavigate();
  const [gray900] = useToken('colors', ['gray.900']);
  const [shadow] = useToken('shadows', ['md']);

  const [adress, setAdress] = useState('');

  const onCLick = () => {
    if (centroid !== undefined) {
      setAddress({ latLng: centroid!, address: adress, geometry: geometry! });
      navigate('/add-property/about-property');
    }
  };

  return (
    <VStack w="full" gap={4} alignItems="flex-end">
      <SearchAddress />
      <DrawMap />
      <CustomTextArea
        label="Detail Alamat"
        placeholder="Isi detail alamat"
        onChange={(value) => {
          setAdress(value);
        }}
      />
      <Button
        bg="gray.800"
        color="white"
        _hover={{ backgroundColor: gray900, shadow: shadow }}
        rightIcon={<FaChevronRight />}
        onClick={onCLick}
        isDisabled={
          centroid![0] === 0 || centroid![1] === 0 || adress === '' || overalps
        }
      >
        Tahap selanjutnya
      </Button>
    </VStack>
  );
};

export default AddAddressProperty;
