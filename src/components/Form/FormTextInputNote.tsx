import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInputNote, TextInputProps} from '@components';

export function FormTextInputNote<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputNoteProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInputNote
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...textInputNoteProps}
        />
      )}
    />
  );
}
