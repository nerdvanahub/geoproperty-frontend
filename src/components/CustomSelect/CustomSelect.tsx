import { Icon, Text } from '@chakra-ui/react';
import { AsyncSelect, chakraComponents } from 'chakra-react-select';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaChevronDown } from 'react-icons/fa';

export interface CustomSelectProps {
  options?: {
    label: string;
    value: string | number[];
  }[];
  onChange?: (value: string | number[] | undefined) => void;
  placeholder?: string;
  isClearable?: boolean;
  value?: string;
  name?: string;
  optionsIcon?: IconType;
  dropdownIndicator?: IconType;
  loadOptions?: (inputValue: string) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  onChange,
  placeholder,
  name,
  optionsIcon,
  loadOptions,
  dropdownIndicator = FaChevronDown,
  value,
}) => {
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions={options !== undefined ? options : []}
      size="lg"
      placeholder={placeholder}
      onChange={(valueOption) => onChange && onChange(valueOption?.value)}
      options={options}
      name={name}
      isClearable
      value={options?.find((option) => option.value === value)}
      chakraStyles={{
        input: (provided) => ({
          ...provided,
          width: '100%',
        }),
        container: (provided) => ({
          ...provided,
          width: '100%',
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          bg: 'transparent',
          borderWidth: 0,
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          bg: 'transparent',
          borderWidth: 0,
        }),
        crossIcon: (provided) => ({
          ...provided,
          color: 'blue.500',
        }),
      }}
      components={{
        Option: ({ children, ...props }) => (
          <chakraComponents.Option {...props}>
            {optionsIcon && (
              <Icon as={optionsIcon} boxSize={4} color="gray.500" mr="10px" />
            )}
            <Text>{children}</Text>
          </chakraComponents.Option>
        ),
        DropdownIndicator: ({ children, ...props }) => (
          <chakraComponents.DropdownIndicator {...props}>
            <Icon as={dropdownIndicator} boxSize={4} color="blue.500" />
            {children}
          </chakraComponents.DropdownIndicator>
        ),
      }}
    />
  );
};

export default CustomSelect;
