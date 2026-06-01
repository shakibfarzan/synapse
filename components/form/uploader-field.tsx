import { Controller } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Accept } from 'react-dropzone';
import React from 'react';
import RequiredSign from '@/components/form/required-sign';
import { FormProps } from './form.types';
import Uploader from '@/components/uploader';

type Props = FormProps & {
  accept?: Accept;
  maxSizeMB?: number;
  maxFiles?: number;
  labelClassName?: string;
};

const UploaderField: React.FC<Props> = ({
  name,
  label,
  control,
  accept,
  maxSizeMB,
  maxFiles,
  labelClassName = '',
  isRequired,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel className={labelClassName}>
            {label}
            {isRequired && <RequiredSign />}
          </FieldLabel>

          <Uploader
            value={field.value || []}
            onChange={field.onChange}
            accept={accept}
            maxSizeMB={maxSizeMB}
            maxFiles={maxFiles}
          />

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default UploaderField;
