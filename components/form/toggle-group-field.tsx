import React from 'react';
import { Controller } from 'react-hook-form';

import { FormProps, Option } from '@/components/form/form.types';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import RequiredSign from './required-sign';

type Props = FormProps & {
  options: Option[];
  className?: string;
  itemClassName?: string | ((value: string) => string);
};

const ToggleGroupField: React.FC<Props> = ({
  name,
  label,
  control,
  isRequired,
  className,
  options,
  itemClassName,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className={className} data-invalid={fieldState.invalid}>
          <FieldLabel>
            {label}
            {isRequired && <RequiredSign />}
          </FieldLabel>

          <ToggleGroup
            type="single"
            value={field.value}
            onValueChange={(value) => {
              if (value) {
                field.onChange(value);
              }
            }}
            className="grid grid-cols-2 gap-3"
          >
            {options.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                className={
                  !!itemClassName
                    ? typeof itemClassName === 'string'
                      ? itemClassName
                      : itemClassName(option.value)
                    : ''
                }
              >
                {typeof option.label === 'string' ? option.label : option.label(option.value)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default ToggleGroupField;
