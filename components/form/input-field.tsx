import React from 'react';
import { FormProps } from '@/components/form/form.types';
import { Controller } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '../ui/field';
import RequiredSign from './required-sign';
import { Input } from '../ui/input';

type Props = FormProps & {
  placeholder?: string;
  className?: string;
};

const InputField: React.FC<Props> = ({
  className,
  name,
  placeholder,
  label,
  control,
  isRequired,
}) => {
  return (
    <Controller
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className={className}>
          <FieldLabel htmlFor={field.name}>
            {label}
            {isRequired && <RequiredSign />}
          </FieldLabel>
          <Input
            {...field}
            id={field.name}
            value={field.value ?? ''}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            onChange={(e) => {
              field.onChange(e);
            }}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
      name={name}
    />
  );
};

export default InputField;
