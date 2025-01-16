import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { CustomTextArea, CustomTextField } from '../../../components';
import CustomSelectControl from '../../../components/customFormControl/CustomSelectControl';
import { Property } from '../../../types/propertyType';

interface CommonInformationPropertyProps {
  control: Control<Property>;
  errors: FieldErrors<Property>;
}

const CommonInformationProperty: React.FC<CommonInformationPropertyProps> = ({
  control,
  errors,
}) => {
  return (
    <VStack
      w="full"
      alignItems="flex-start"
      p={8}
      borderWidth={1}
      borderColor="gray.300"
      rounded="lg"
      gap={4}
    >
      <Heading size="md" color="blue.500">
        Informasi Umum
      </Heading>
      <Controller
        name="title_ads"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomTextField
            type={'text'}
            label={'Judul Iklan'}
            placeholder="Masukan judul iklan"
            name={field.name}
            onChange={field.onChange}
            isInvalid={!!errors.title_ads}
            value={field.value}
          />
        )}
      />
      <Controller
        name="type_ads"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomSelectControl
            label={'Tipe Iklan'}
            name={field.name}
            isInvalid={!!errors.type_ads}
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
        name="condition"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomSelectControl
            label={'Kondisi Properti'}
            name={field.name}
            isInvalid={!!errors.condition}
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
        name="type_property"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomSelectControl
            label={'Tipe Properti'}
            name={field.name}
            isInvalid={!!errors.type_property}
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
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomTextArea
            label={'Deskripsi Iklan'}
            placeholder="Masukkan deskripsi tentang properti yang Anda jual"
            name={field.name}
            onChange={field.onChange}
            isInvalid={!!errors.description}
            value={field.value}
          />
        )}
      />
    </VStack>
  );
};

export default CommonInformationProperty;
