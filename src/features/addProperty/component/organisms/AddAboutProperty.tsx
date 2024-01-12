import { Button, VStack, useToken } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FaChevronRight } from 'react-icons/fa';
import { CustomTextArea, CustomTextField } from '../../../../components';
import CustomSelectControl from '../../../../components/customFormControl/CustomSelectControl';
import useAddAboutProperty from '../../hooks/useAddAboutProperty';

interface AddAboutPropertyProps {}

const AddAboutProperty: React.FC<AddAboutPropertyProps> = () => {
  const [gray900] = useToken('colors', ['gray.900']);
  const [shadow] = useToken('shadows', ['md']);
  const { errors, handleSubmit, onSubmit, control, watch } =
    useAddAboutProperty();

  return (
    <VStack
      w="full"
      alignItems="flex-end"
      as="form"
      gap={4}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="judulIklan"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomTextField
            type={'text'}
            label={'Judul Iklan'}
            placeholder="Masukan judul iklan"
            name={field.name}
            onChange={field.onChange}
            isInvalid={!!errors.judulIklan}
          />
        )}
      />
      <Controller
        name="tipeIklan"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomSelectControl
            label={'Tipe Iklan'}
            name={field.name}
            isInvalid={!!errors.tipeIklan}
            placeholder="Pilih tipe iklan"
            onChange={field.onChange}
            options={[
              {
                label: 'Jual',
                value: 'jual',
              },
              {
                label: 'Sewa',
                value: 'sewa',
              },
            ]}
          />
        )}
      />
      <Controller
        name="kondisiProperti"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomSelectControl
            label={'Kondisi Properti'}
            name={field.name}
            isInvalid={!!errors.kondisiProperti}
            placeholder="Pilih kondisi properti"
            onChange={field.onChange}
            options={[
              {
                label: 'Baru',
                value: 'baru',
              },
              {
                label: 'Bekas',
                value: 'bekas',
              },
            ]}
          />
        )}
      />
      <Controller
        name="tipeProperti"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomSelectControl
            label={'Tipe Properti'}
            name={field.name}
            isInvalid={!!errors.kondisiProperti}
            placeholder="Pilih tipe properti"
            onChange={field.onChange}
            options={[
              {
                label: 'Rumah',
                value: 'rumah',
              },
              {
                label: 'Apartement',
                value: 'apartement',
              },
            ]}
          />
        )}
      />
      <Controller
        name="deskirpsi"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomTextArea
            label={'Deskripsi Iklan'}
            placeholder="Masukkan deskripsi tentang properti yang Anda jual"
            name={field.name}
            onChange={field.onChange}
            isInvalid={!!errors.judulIklan}
          />
        )}
      />
      <Button
        bg="gray.800"
        color="white"
        _hover={{ backgroundColor: gray900, shadow: shadow }}
        rightIcon={<FaChevronRight />}
        type="submit"
        isDisabled={
          watch('judulIklan') === '' ||
          watch('tipeIklan') === '' ||
          watch('kondisiProperti') === '' ||
          watch('tipeProperti') === '' ||
          watch('deskirpsi') === ''
        }
      >
        Tahap selanjutnya
      </Button>
    </VStack>
  );
};

export default AddAboutProperty;
