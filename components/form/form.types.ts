import { Control, FieldValues, Path } from 'react-hook-form';
import React from 'react';

export type FormProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  isRequired?: boolean;
  control?: Control<T, any, T>;
};

export type Option = {
  label: string | ((value: string) => React.ReactNode);
  value: string;
};
