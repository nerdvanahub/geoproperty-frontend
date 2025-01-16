import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { CustomTextField } from '../../../components';

import { Property } from '../types';

interface EditContactPropertyProps {
  control: Control<Property>;
  errors: FieldErrors<Property>;
}

const EditContactProperty: React.FC<EditContactPropertyProps> = ({
  control,
}) => {
  return (
    <VStack
      w="full"
      alignItems="flex-end"
      p={8}
      borderWidth={1}
      borderColor="gray.300"
      rounded="lg"
      gap={4}
    >
      <VStack alignItems="flex-start" w="full">
        <Heading as="h2" color="blue.500" size="md">
          Kontak Penjual
        </Heading>
      </VStack>
      <Controller
        name="full_name"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <CustomTextField
            type={'text'}
            label={'Nama Lengkap'}
            placeholder="Masukan nama lengkap"
            name={field.name}
            onChange={field.onChange}
            isInvalid={fieldState.invalid}
            value={field.value}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <CustomTextField
            type={'text'}
            label={'Email'}
            placeholder="Masukan email"
            name={field.name}
            onChange={field.onChange}
            isInvalid={fieldState.invalid}
            value={field.value}
          />
        )}
      />
      <Controller
        name="phone_number"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <CustomTextField
            type={'text'}
            label={
              <>
                Nomor Handphone{' '}
                <Text color="gray.500" as="span">
                  (nomor whatsapp)
                </Text>
              </>
            }
            placeholder="Masukan nomor handphone"
            name={field.name}
            onChange={field.onChange}
            isInvalid={fieldState.invalid}
            value={field.value}
          />
        )}
      />
    </VStack>
  );
};

export default EditContactProperty;
