import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAddPropertyStore from '../store/useAddPropertyStore';
import { TAddAboutPropertyForm } from '../types/addPropertyFormType';

const useAddAboutProperty = () => {
  const setAboutProperty = useAddPropertyStore(
    (state) => state.setAboutProperty
  );

  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm<TAddAboutPropertyForm>({
    defaultValues: {
      deskirpsi: '',
      judulIklan: '',
      kondisiProperti: '',
      tipeIklan: '',
      tipeProperti: '',
    },
  });

  // useEffect(() => {
  //   reset({
  //     deskirpsi: data !== undefined ? data.description : '',
  //     judulIklan: data !== undefined ? data?.title_ads : '',
  //     kondisiProperti: data !== undefined ? data.condition : '',
  //     tipeIklan: data !== undefined ? data?.type_ads : '',
  //     tipeProperti: data !== undefined ? data?.type_property : '',
  //   });
  // }, [data]);

  const onSubmit = (data: TAddAboutPropertyForm) => {
    setAboutProperty({ ...data });
    navigate(
      `/add-property/detail-property?typeAds=${data.tipeIklan}&typeProperty=${data.tipeProperti}`
    );
  };

  return {
    handleSubmit,
    control,
    errors,
    isSubmitting,
    onSubmit,
    watch,
  };
};

export default useAddAboutProperty;
