import { VStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  AddRentHouseProperty,
  AddSellApartementProperty,
  AddSellHouseProperty,
} from '../features/addProperty';
import AddRentApartementProperty from '../features/addProperty/component/template/AddRentApartementProperty';

interface DetailAddPropertyPageProps {}

type Tads = {
  typeAds: 'jual' | 'sewa';
  typeProperty: 'rumah' | 'apartement';
};

const DetailAddPropertyPage: React.FC<DetailAddPropertyPageProps> = () => {
  const [ads, setAds] = React.useState<Tads>();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const typeAds = params.get('typeAds');
    const typeProperty = params.get('typeProperty');
    if (!typeAds || !typeProperty) {
      navigate('/add-property/about-property');
    }
    setAds({
      typeAds: typeAds as Tads['typeAds'],
      typeProperty: typeProperty as Tads['typeProperty'],
    });
  }, []);

  return (
    <VStack w="full" alignItems="flex-start">
      {ads?.typeAds === 'jual' && ads?.typeProperty === 'rumah' && (
        <AddSellHouseProperty />
      )}
      {ads?.typeAds === 'sewa' && ads?.typeProperty === 'rumah' && (
        <AddRentHouseProperty />
      )}
      {ads?.typeAds === 'jual' && ads?.typeProperty === 'apartement' && (
        <AddSellApartementProperty />
      )}
      {ads?.typeAds === 'sewa' && ads?.typeProperty === 'apartement' && (
        <AddRentApartementProperty />
      )}
    </VStack>
  );
};

export default DetailAddPropertyPage;
