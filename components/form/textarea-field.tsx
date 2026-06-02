import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import RequiredSign from '@/components/form/required-sign';
import { FormProps } from '@/components/form/form.types';

type Props<T extends FieldValues> = FormProps<T> & {
  placeholder?: string;
  className?: string;
  fieldDescription?: string;
  rows?: number;
};

function TextareaField<T extends FieldValues>({
  fieldDescription,
  className,
  name,
  control,
  isRequired,
  placeholder,
  label,
  rows,
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>
            {label}
            {isRequired && <RequiredSign />}
          </FieldLabel>
          <Textarea
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            className={className}
            rows={rows}
          />
          {fieldDescription && <FieldDescription>{fieldDescription}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

export default TextareaField;
