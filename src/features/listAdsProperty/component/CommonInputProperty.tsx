import { GridItem } from '@chakra-ui/react';
import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import {
  CustomCheckboxInput,
  CustomNumberInput,
  CustomTextField,
} from '../../../components';
import CustomSelectControl from '../../../components/customFormControl/CustomSelectControl';
import { Property } from '../types';

interface CommonInputPropertyProps {
  control: Control<Property>;
  errors: FieldErrors<Property>;
  topSection?: React.ReactNode;
  bottomSection?: React.ReactNode;
}

const CommonInputProperty: React.FC<CommonInputPropertyProps> = ({
  control,
  errors,
  topSection,
  bottomSection,
}) => {
  return (
    <>
      {topSection}
      <GridItem>
        <Controller
          name="bath_rooms"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <CustomNumberInput
                label={'Kamar mandi'}
                placeholder="Masukan jumlah kamar tidur"
                name={field.name}
                onChange={field.onChange}
                min={0}
                max={10}
                isInvalid={errors.bath_rooms?.message !== undefined}
                errorMessage={errors.bath_rooms?.message}
                value={Number(field.value)}
              />
            );
          }}
        />
      </GridItem>
      <GridItem>
        <Controller
          name="bed_rooms"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomNumberInput
              min={0}
              max={10}
              label={'Kamar tidur'}
              placeholder="Masukan jumlah kamar tidur"
              name={field.name}
              onChange={field.onChange}
              isInvalid={errors.bed_rooms && true}
              errorMessage={errors?.bed_rooms?.message}
              value={Number(field.value)}
            />
          )}
        />
      </GridItem>
      <GridItem>
        <Controller
          name="floors"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomNumberInput
              min={0}
              max={10}
              label={'Jumlah Lantai'}
              placeholder="Masukan jumlah Lantai"
              name={field.name}
              onChange={field.onChange}
              isInvalid={errors.floors && true}
              errorMessage={errors?.floors?.message}
              value={Number(field.value)}
            />
          )}
        />
      </GridItem>
      <GridItem>
        <Controller
          name="park_area"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomNumberInput
              min={0}
              max={10}
              label={'Lahan Parkir'}
              placeholder="Masukan jumlah lahar parkir"
              name={field.name}
              onChange={field.onChange}
              isInvalid={errors.park_area && true}
              errorMessage={errors?.park_area?.message}
              value={Number(field.value)}
            />
          )}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Controller
          name="furniture"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomSelectControl
              label={'Tipe Perabot'}
              name={field.name}
              isInvalid={errors.furniture && true}
              placeholder="Pilih tipe perabot"
              onChange={field.onChange}
              errorMessage={errors.furniture?.message}
              value={field.value === undefined ? '' : field.value.toString()}
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
          name="electrical_power"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomTextField
              type={'text'}
              label={'Daya Listrik'}
              placeholder="Masukan daya listrik"
              name={field.name}
              onChange={field.onChange}
              isInvalid={errors.electrical_power && true}
              errorMessage={errors?.electrical_power?.message}
              value={field.value === undefined ? '' : field.value.toString()}
            />
          )}
        />
      </GridItem>
      {bottomSection}
      <GridItem colSpan={2}>
        <Controller
          name="facility_in_door"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomCheckboxInput
              label={'Fasilitas property'}
              name={field.name}
              isInvalid={errors.facility_in_door && true}
              onChange={field.onChange}
              errorMessage={errors.facility_in_door?.message}
              value={field.value}
              options={['Kichen Set', 'Gym', 'Wifi', 'ac', 'Tv kabel']}
            />
          )}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Controller
          name="facility_out_door"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomCheckboxInput
              label={'Fasilitas luar property'}
              name={field.name}
              isInvalid={errors.facility_out_door && true}
              onChange={field.onChange}
              errorMessage={errors.facility_out_door?.message}
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
