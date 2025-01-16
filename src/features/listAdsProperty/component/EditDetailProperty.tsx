import { Grid, GridItem, HStack, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { CustomTextField } from '../../../components';
import CustomSelectControl from '../../../components/customFormControl/CustomSelectControl';

import { Property } from '../types';
import CommonInputProperty from './CommonInputProperty';

interface EditDetailPropertyProps {
  control: Control<Property>;
  errors: FieldErrors<Property>;
}

const EditDetailProperty: React.FC<EditDetailPropertyProps> = ({
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
      <VStack w="full" alignItems="flex-start">
        <HStack gap="4">
          <Heading as="h2" color="blue.500" size="md">
            Informasi Detail Properti
          </Heading>
        </HStack>
      </VStack>
      <Grid templateColumns="repeat(2, 1fr)" w="full" as="form" gap={4}>
        <GridItem colSpan={2}>
          <Controller
            name="price"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
                type={'text'}
                label={'Harga Jual'}
                placeholder="Masukan nominal"
                name={field.name}
                onChange={field.onChange}
                isInvalid={errors.price && true}
                errorMessage={errors?.price?.message}
                value={field.value === undefined ? '0' : field.value.toString()}
              />
            )}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Controller
            name="building_type"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomSelectControl
                label={'Tipe Rumah'}
                name={field.name}
                isInvalid={errors.building_type && true}
                placeholder="Pilih tipe rumah"
                onChange={field.onChange}
                errorMessage={errors.building_type?.message}
                value={field.value}
                options={[
                  {
                    label: 'Cluster',
                    value: 'cluster',
                  },
                  {
                    label: 'Town House',
                    value: 'town house',
                  },
                  {
                    label: 'Kostan',
                    value: 'kostan',
                  },
                  {
                    label: 'Rumah Subsidi',
                    value: 'rumah subsidi',
                  },
                  {
                    label: 'Rumah Susun',
                    value: 'rumah susun',
                  },
                ]}
              />
            )}
          />
        </GridItem>

        <GridItem>
          <Controller
            name="surface_area"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
                type={'text'}
                label={'Luas Tanah'}
                placeholder="Masukan luas tanah"
                name={field.name}
                onChange={field.onChange}
                value={field.value === undefined ? '0' : field.value.toString()}
                isInvalid={errors.surface_area && true}
                errorMessage={errors?.surface_area?.message}
              />
            )}
          />
        </GridItem>
        <GridItem>
          <Controller
            name="building_area"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
                type={'text'}
                label={'Luas Bangunan'}
                placeholder="Masukan luas bangunan"
                name={field.name}
                value={field.value === undefined ? '0' : field.value.toString()}
                onChange={field.onChange}
                isInvalid={errors.building_area && true}
                errorMessage={errors?.building_area?.message}
              />
            )}
          />
        </GridItem>

        <CommonInputProperty
          control={control}
          errors={errors}
          bottomSection={
            <>
              <GridItem colSpan={2}>
                <Controller
                  name="oriented"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <CustomSelectControl
                      label={'Orientasi Bangunan'}
                      name={field.name}
                      isInvalid={errors.oriented && true}
                      placeholder="Pilih orientasi bangunan"
                      onChange={field.onChange}
                      value={field.value}
                      errorMessage={errors.oriented?.message}
                      options={[
                        {
                          label: 'Barat',
                          value: 'barat',
                        },
                        {
                          label: 'Timur',
                          value: 'timur',
                        },
                        {
                          label: 'Utara',
                          value: 'utara',
                        },
                        {
                          label: 'Selatan',
                          value: 'selatan',
                        },
                      ]}
                    />
                  )}
                />
              </GridItem>
            </>
          }
        />
      </Grid>
    </VStack>
  );
};

export default EditDetailProperty;
