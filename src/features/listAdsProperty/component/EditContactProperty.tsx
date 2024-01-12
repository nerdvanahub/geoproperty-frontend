import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { CustomTextField } from '../../../components';
import useAddContactProperty from '../../addProperty/hooks/useAddContactProperty';

interface EditContactPropertyProps {}

const EditContactProperty: React.FC<EditContactPropertyProps> = () => {
  const { handleSubmit, onSubmit, control } = useAddContactProperty();
  return (
    <VStack
      w="full"
      alignItems="flex-end"
      as="form"
      p={8}
      borderWidth={1}
      borderColor="gray.300"
      rounded="lg"
      gap={4}
      onSubmit={handleSubmit(onSubmit)}
    >
      <VStack alignItems="flex-start" w="full">
        <Heading as="h2" color="blue.500" size="md">
          Kontak Penjual
        </Heading>
      </VStack>
      <Controller
        name="nama"
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
          />
        )}
      />
      <Controller
        name="nomorHp"
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
          />
        )}
      />
    </VStack>
  );
};

export default EditContactProperty;
