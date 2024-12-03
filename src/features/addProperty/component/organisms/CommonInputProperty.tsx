import { GridItem } from '@chakra-ui/react';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  CustomCheckboxInput,
  CustomNumberInput,
  CustomTextField,
} from '../../../../components';
import CustomSelectControl from '../../../../components/customFormControl/CustomSelectControl';
import { TAddPropertyForm } from '../../types/addPropertyFormType';

interface CommonInputPropertyProps {
  control: Control<TAddPropertyForm>;
  topSection?: React.ReactNode;
  bottomSection?: React.ReactNode;
}

const CommonInputProperty: React.FC<CommonInputPropertyProps> = ({
  control,
  topSection,
  bottomSection,
}) => {
  return (
    <>
      {topSection}
      <GridItem>
        <Controller
          name="kamarMandi"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => {
            return (
              <CustomNumberInput
                label={'Kamar mandi'}
                placeholder="Masukan jumlah kamar tidur"
                name={field.name}
                onChange={field.onChange}
                min={0}
                max={10}
                isInvalid={formState.errors.kamarMandi?.message !== undefined}
                errorMessage={formState.errors.kamarMandi?.message}
                value={Number(field.value)}
              />
            );
          }}
        />
      </GridItem>
      <GridItem>
        <Controller
          name="kamarTidur"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <CustomNumberInput
              min={0}
              max={10}
              label={'Kamar tidur'}
              placeholder="Masukan jumlah kamar tidur"
              name={field.name}
              onChange={field.onChange}
              isInvalid={formState.errors.kamarTidur && true}
              errorMessage={formState.errors?.kamarTidur?.message}
              value={Number(field.value)}
            />
          )}
        />
      </GridItem>
      <GridItem>
        <Controller
          name="jumlahLantai"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <CustomNumberInput
              min={0}
              max={10}
              label={'Jumlah Lantai'}
              placeholder="Masukan jumlah Lantai"
              name={field.name}
              onChange={field.onChange}
              isInvalid={formState.errors.jumlahLantai && true}
              errorMessage={formState.errors?.jumlahLantai?.message}
              value={Number(field.value)}
            />
          )}
        />
      </GridItem>
      <GridItem>
        <Controller
          name="lahanParkir"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <CustomNumberInput
              min={0}
              max={10}
              label={'Lahan Parkir'}
              placeholder="Masukan jumlah lahar parkir"
              name={field.name}
              onChange={field.onChange}
              isInvalid={formState.errors.lahanParkir && true}
              errorMessage={formState.errors?.lahanParkir?.message}
              value={Number(field.value)}
            />
          )}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Controller
          name="tipeParabot"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <CustomSelectControl
              label={'Tipe Perabot'}
              name={field.name}
              isInvalid={formState.errors.tipeRumah && true}
              placeholder="Pilih tipe perabot"
              onChange={field.onChange}
              errorMessage={formState.errors.tipeRumah?.message}
              value={field.value}
              options={[
                {
                  label: 'Tidak Perabot',
                  value: 'tidak perabot',
                },
                {
                  label: 'Full Perabot',
                  value: 'full perabot',
                },
              ]}
            />
          )}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Controller
          name="dayaListrik"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <CustomTextField
              type={'text'}
              label={'Daya Listrik'}
              placeholder="Masukan daya listrik"
              name={field.name}
              onChange={field.onChange}
              isInvalid={formState.errors.dayaListrik && true}
              errorMessage={formState.errors?.dayaListrik?.message}
              value={field.value}
            />
          )}
        />
      </GridItem>
      {bottomSection}
      <GridItem colSpan={2}>
        <Controller
          name="fasilitasProperty"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <CustomCheckboxInput
              label={'Fasilitas property'}
              name={field.name}
              isInvalid={formState.errors.tipeRumah && true}
              onChange={field.onChange}
              errorMessage={formState.errors.tipeRumah?.message}
              value={field.value}
              options={['Kichen Set', 'Gym', 'Wifi', 'ac', 'Tv kabel']}
            />
          )}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Controller
          name="fasilitaLuarProperty"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <CustomCheckboxInput
              label={'Fasilitas luar property'}
              name={field.name}
              isInvalid={formState.errors.tipeRumah && true}
              onChange={field.onChange}
              errorMessage={formState.errors.tipeRumah?.message}
              value={field.value}
              options={[
                'Keamanan 24/7',
                'Garasi',
                'Tempat Olahraga',
                'Kolam Renang',
                'Area Hiburan',
              ]}
            />
          )}
        />
      </GridItem>
    </>
  );
};

export default CommonInputProperty;
