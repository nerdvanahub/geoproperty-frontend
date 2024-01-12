import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAddPropertyStore from '../store/useAddPropertyStore';
import { TAddPropertyForm } from '../types/addPropertyFormType';

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
