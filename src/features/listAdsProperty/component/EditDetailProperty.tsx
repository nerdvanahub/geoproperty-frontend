import { Grid, GridItem, HStack, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { CustomTextField } from '../../../components';
import CustomSelectControl from '../../../components/customFormControl/CustomSelectControl';
import CommonInputProperty from '../../addProperty/component/organisms/CommonInputProperty';
import useAddDetailProperty from '../../addProperty/hooks/useAddDetailProperty';

interface EditDetailPropertyProps {}

const EditDetailProperty: React.FC<EditDetailPropertyProps> = () => {
  const { control, errors, handleSubmit, onSubmit } = useAddDetailProperty();
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
      <Grid
        templateColumns="repeat(2, 1fr)"
        w="full"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        gap={4}
      >
        <GridItem colSpan={2}>
          <Controller
            name="hargaJual"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomTextField
                type={'text'}
                label={'Harga Jual'}
                placeholder="Masukan nominal"
                name={field.name}
                onChange={field.onChange}
                isInvalid={formState.errors.hargaJual && true}
                errorMessage={errors?.hargaJual?.message}
              />
            )}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Controller
            name="tipeRumah"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomSelectControl
                label={'Tipe Rumah'}
                name={field.name}
                isInvalid={formState.errors.tipeRumah && true}
                placeholder="Pilih tipe rumah"
                onChange={field.onChange}
                errorMessage={formState.errors.tipeRumah?.message}
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
            name="luasTanah"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomTextField
                type={'text'}
                label={'Luas Tanah'}
                placeholder="Masukan luas tanah"
                name={field.name}
                onChange={field.onChange}
                isInvalid={formState.errors.luasTanah && true}
                errorMessage={errors?.luasTanah?.message}
              />
            )}
          />
        </GridItem>
        <GridItem>
          <Controller
            name="luasBangunan"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomTextField
                type={'text'}
                label={'Luas Bangunan'}
                placeholder="Masukan luas bangunan"
                name={field.name}
                onChange={field.onChange}
                isInvalid={formState.errors.luasBangunan && true}
                errorMessage={errors?.luasBangunan?.message}
              />
            )}
          />
        </GridItem>

        <CommonInputProperty
          control={control}
          bottomSection={
            <>
              <GridItem colSpan={2}>
                <Controller
                  name="orientasiBangunan"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, formState }) => (
                    <CustomSelectControl
                      label={'Orientasi Bangunan'}
                      name={field.name}
                      isInvalid={formState.errors.orientasiBangunan && true}
                      placeholder="Pilih orientasi bangunan"
                      onChange={field.onChange}
                      errorMessage={formState.errors.orientasiBangunan?.message}
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
              <GridItem colSpan={2}>
                <Controller
                  name="tipeSertifikat"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, formState }) => (
                    <CustomSelectControl
                      label={'Tipe Sertifikat'}
                      name={field.name}
                      isInvalid={formState.errors.tipeRumah && true}
                      placeholder="Pilih tipe serifikat"
                      onChange={field.onChange}
                      errorMessage={formState.errors.tipeRumah?.message}
                      options={[
                        {
                          label: 'Hak Milik',
                          value: 'hak milik',
                        },
                        {
                          label: 'Hak Guna Usaha',
                          value: 'hak guna usaha',
                        },
                        {
                          label: 'Hak Guna Bangunan',
                          value: 'hak guna bangunan',
                        },
                        {
                          label: 'Hak Pakai',
                          value: 'hak pakai',
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
