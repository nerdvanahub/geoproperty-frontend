import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAddPropertyStore from '../store/useAddPropertyStore';
import { TAddPropertyForm } from '../types/addPropertyFormType';

/**
 *
 * { property }: { property?: Property }
 */

const useAddDetailProperty = () => {
  const navigate = useNavigate();

  const setDetailProperty = useAddPropertyStore(
    (state) => state.setDetailProperty
  );

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
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

  // useEffect(() => {
  //   reset({
  //     luasBangunan: property ? property.building_area.toString() : '',
  //     kamarMandi: property ? property.bath_rooms.toString() : '',
  //     kamarTidur: property ? property.bed_rooms.toString() : '',
  //     jumlahLantai: property ? property.floors.toString() : '',
  //     lahanParkir: property ? property.park_area.toString() : '',
  //     tipeParabot: property
  //       ? property.furniture
  //         ? 'tidak perabot'
  //         : 'full parabot'
  //       : '',
  //     dayaListrik: property ? property.electrical_power.toString() : '',
  //     fasilitasProperty: property ? property.facility_in_door : [''],
  //     fasilitaLuarProperty: property ? property.facility_out_door : [''],
  //     hargaJual: property ? property.price.toString() : '',
  //     tipeRumah: property ? property.type_property : '',
  //     luasTanah: property ? property.surface_area.toString() : '',
  //     orientasiBangunan: property ? property.oriented : '',
  //   });
  // }, [property]);

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
