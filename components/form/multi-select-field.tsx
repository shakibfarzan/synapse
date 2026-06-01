import React from 'react';
import { Controller } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import RequiredSign from '@/components/form/required-sign';
import MultiSelect from '@/components/ui/multi-select';
import { FormProps, Option } from '@/components/form/form.types';

type Props = FormProps & {
  placeholder?: string;
  options: Option[];
  className?: string;
  isMultiSelect?: boolean;
};

const MultiSelectField: React.FC<Props> = ({
  options,
  placeholder,
  label,
  name,
  control,
  className,
  isRequired,
  isMultiSelect = true,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field orientation="vertical" data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>
            {label}
            {isRequired && <RequiredSign />}
          </FieldLabel>
          <MultiSelect
            hidePlaceholderWhenSelected
            className={className}
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
            maxSelected={isMultiSelect ? undefined : 1}
            inputProps={{ name: field.name }}
            options={options.map(({ label, value }) => ({ value, label: label as string }))}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default MultiSelectField;
