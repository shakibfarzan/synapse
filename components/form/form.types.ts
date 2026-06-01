import { Control, FieldValues } from 'react-hook-form';
import React from 'react';

export type FormProps = {
  name: string;
  label: string;
  isRequired?: boolean;
  control?: Control<FieldValues, any, FieldValues>;
};

export type Option = {
  label: string | ((value: string) => React.ReactNode);
  value: string;
};
