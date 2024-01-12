import {
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
  useToken,
} from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FaChevronRight } from 'react-icons/fa';
import { CustomBadge, CustomTextField } from '../../../../components';
import CustomSelectControl from '../../../../components/customFormControl/CustomSelectControl';
import useAddDetailProperty from '../../hooks/useAddDetailProperty';
import CommonInputProperty from '../organisms/CommonInputProperty';

interface AddSellHousePropertyProps {}

const AddSellHouseProperty: React.FC<AddSellHousePropertyProps> = () => {
  const [gray900] = useToken('colors', ['gray.900']);
  const [shadow] = useToken('shadows', ['md']);
  const { control, errors, handleSubmit, onSubmit, watch } =
    useAddDetailProperty();

  return (
    <VStack w="full" alignItems="flex-start" gap={10}>
      <VStack w="full" alignItems="flex-start">
        <HStack gap="4">
          <Heading as="h1" color="blue.500">
            Informasi Detail Properti
          </Heading>
          <CustomBadge color="green" text="Jual" />
          <CustomBadge color="blue" text="Rumah" />
        </HStack>
        <Text color="gray.500" fontSize="lg">
          Tambahkan informasi detail dari properti anda, untuk memberi informasi
          properti anda lebih lengkap dan detail ke pembeli properti
        </Text>
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
        <GridItem colSpan={2} display="flex" justifyContent="flex-end">
          <Button
            bg="gray.800"
            color="white"
            _hover={{ backgroundColor: gray900, shadow: shadow }}
            rightIcon={<FaChevronRight />}
            type="submit"
            isDisabled={
              watch('hargaJual') === '' ||
              watch('tipeRumah') === '' ||
              watch('luasBangunan') === '' ||
              watch('luasTanah') === '' ||
              watch('kamarMandi') === '' ||
              watch('kamarTidur') === '' ||
              watch('jumlahLantai') === '' ||
              watch('lahanParkir') === '' ||
              watch('tipeParabot') === '' ||
              watch('dayaListrik') === '' ||
              watch('tipeSertifikat') === ''
            }
          >
            Tahap selanjutnya
          </Button>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default AddSellHouseProperty;
