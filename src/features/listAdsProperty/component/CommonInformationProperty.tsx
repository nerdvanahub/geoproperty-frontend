import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { CustomTextArea, CustomTextField } from '../../../components';
import CustomSelectControl from '../../../components/customFormControl/CustomSelectControl';
import { Property } from '../../../types/propertyType';
import useAddAboutProperty from '../../addProperty/hooks/useAddAboutProperty';

interface CommonInformationPropertyProps {
  property?: Property;
}

const CommonInformationProperty: React.FC<CommonInformationPropertyProps> = ({
  property,
}) => {
  const { errors, handleSubmit, onSubmit, control } = useAddAboutProperty({
    data: property,
  });
  return (
    <VStack
      w="full"
      alignItems="flex-start"
      as="form"
      p={8}
      borderWidth={1}
      borderColor="gray.300"
      rounded="lg"
      gap={4}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading size="md" color="blue.500">
        Informasi Umum
      </Heading>
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
            value={field.value}
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
            value={field.value}
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
            value={field.value}
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
            value={field.value}
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
            value={field.value}
          />
        )}
      />
    </VStack>
  );
};

export default CommonInformationProperty;
