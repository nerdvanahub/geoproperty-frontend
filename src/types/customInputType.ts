import { ReactNode } from 'react';

export type TBaseCustomInputType = {
  label: string | ReactNode;
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
  name?: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
};
