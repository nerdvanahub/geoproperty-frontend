import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Property } from '../../../types/propertyType';
import useAddPropertyStore from '../store/useAddPropertyStore';
import { TAddPropertyForm } from '../types/addPropertyFormType';

const useAddDetailProperty = ({ property }: { property?: Property }) => {
  const navigate = useNavigate();

  const setDetailProperty = useAddPropertyStore(
    (state) => state.setDetailProperty
  );

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<TAddPropertyForm>({
    defaultValues: {
      luasBangunan: '',
      kamarMandi: '',
      kamarTidur: '',
      jumlahLantai: '',
      lahanParkir: '',
      tipeParabot: '',
      dayaListrik: '',
      fasilitasProperty: [''],
      fasilitaLuarProperty: [''],
      hargaJual: '',
      tipeRumah: '',
      luasTanah: '',
      orientasiBangunan: '',
      tipeSertifikat: '',
    },
  });

  useEffect(() => {
    reset({
      luasBangunan: property?.building_area.toString() || '',
      kamarMandi: property?.bath_rooms.toString() || '',
      kamarTidur: property?.bed_rooms.toString() || '',
      jumlahLantai: property?.floors.toString() || '',
      lahanParkir: property?.park_area.toString() || '',
      tipeParabot: property?.furniture ? 'tidak perabot' : 'full perabot',
      dayaListrik: property?.electrical_power.toString() || '',
      fasilitasProperty: property?.facility_in_door || [''],
      fasilitaLuarProperty: property?.facility_out_door || [''],
      hargaJual: property?.price.toString() || '',
      tipeRumah: property?.type_property || '',
      luasTanah: property?.surface_area.toString() || '',
      orientasiBangunan: property?.oriented || '',
    });
  }, [property]);

  const onSubmit = (data: TAddPropertyForm) => {
    setDetailProperty({ ...data });
    navigate('/add-property/image-property');
  };

  return {
    onSubmit,
    control,
    handleSubmit,
    errors,
    watch,
  };
};

export default useAddDetailProperty;
