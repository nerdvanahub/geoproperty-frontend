import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../authentication/store/useUserStore';
import addPropertyService from '../services/addPropertyService';
import useAddPropertyStore from '../store/useAddPropertyStore';
import usePhotoStore from '../store/usePhotosStore';
import { TAddContactPropertyForm } from '../types/addPropertyFormType';
import { IAddPropertyFieldRequest } from '../types/addPropertyResponse';
/* {
  defaultProperty,
}: {
  defaultProperty?: Property;
}
  */
const useAddContactProperty = () => {
  const property = useAddPropertyStore((state) => state);
  const userId = useUserStore((state) => state.user.id);
  const images = usePhotoStore((state) => state.photos);
  const navigate = useNavigate();
  const addPropertyMutation = useMutation({
    mutationFn: (
      data: IAddPropertyFieldRequest & {
        photos: File[];
      }
    ) => addPropertyService.addProperty(data),
    onSuccess: () => {
      navigate(`/search?lat=${property.latLng[0]}&lng=${property.latLng[1]}`);
    },
  });

  const setContactProperty = useAddPropertyStore(
    (state) => state.setContactProperty
  );

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<TAddContactPropertyForm>({
    defaultValues: {
      email: '',
      nama: '',
      nomorHp: '',
    },
    reValidateMode: 'onBlur',
  });

  // useEffect(() => {
  //   reset({
  //     email: defaultProperty ? defaultProperty?.email : '',
  //     nama: defaultProperty ? defaultProperty?.full_name : '',
  //     nomorHp: defaultProperty ? defaultProperty?.phone_number : '',
  //   });
  // }, [defaultProperty]);

  const onSubmit = (data: TAddContactPropertyForm) => {
    setContactProperty({ ...data });
    addPropertyMutation.mutate({
      address: property.address,
      bath_rooms: parseInt(property.kamarMandi),
      bed_rooms: parseInt(property.kamarTidur),
      building_area: parseInt(property.luasBangunan),
      floors: parseInt(property.jumlahLantai),
      building_type: property.tipeProperti,
      description: property.deskirpsi,
      electrical_power: parseInt(property.dayaListrik),
      geometry: property.geometry,
      furniture: property.tipeParabot === 'tidak perabot' ? false : true,
      center_point: property.latLng,
      facility_out_door: property.fasilitaLuarProperty,
      facility_in_door: property.fasilitasProperty,
      certificate: property.tipeSertifikat,
      condition: property.kondisiProperti,
      oriented: property.orientasiBangunan,
      park_area: parseInt(property.lahanParkir),
      price: parseInt(property.hargaJual),
      type_property: property.tipeProperti,
      title_ads: property.judulIklan,
      type_ads: property.tipeIklan,
      surface_area: parseInt(property.luasTanah),
      user_id: userId,
      photos: images,
      images: images.map((image) => ({ image: image.name })),
      full_name: data.nama,
      email: data.email,
      phone_number: data.nomorHp,
    });
  };

  return {
    handleSubmit,
    control,
    errors,
    onSubmit,
    watch,
  };
};

export default useAddContactProperty;
