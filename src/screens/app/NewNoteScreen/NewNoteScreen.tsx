import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {ViewStyle} from 'react-native/types';

import {Box, Button, FormTextInputNote, Screen, Text} from '@components';

import {newNoteSchema, NewNoteSchema} from './newNoteSchema';

const defaultValues: NewNoteSchema = {
  title: '',
  description: '',
};

export function NewNoteScreen() {
  const {control, formState, handleSubmit} = useForm<NewNoteSchema>({
    resolver: zodResolver(newNoteSchema),
    defaultValues,
    mode: 'onChange',
  });

  function submitForm(formValues: NewNoteSchema) {
    console.log(formValues);
  }

  return (
    <Screen canGoBack scrollabe>
      <Box justifyContent="space-between">
        <Box>
          <Box>
            <FormTextInputNote
              name="title"
              control={control}
              label="Título da Nota"
              boxProps={{mt: 's16'}}
              maxLength={25}
            />

            <FormTextInputNote
              name="description"
              control={control}
              label="Escreva suas anotações"
              boxProps={{mt: 's32'}}
            />
          </Box>

          <Box
            mt="s24"
            justifyContent="center"
            alignItems="center"
            style={{...$boxProps}}>
            <Text color="gray2">Adicionar imagens</Text>
            <Box mt="s8" style={{...$crossProps}}>
              <Text preset="paragraphLarge" color="gray2">
                +
              </Text>
            </Box>
          </Box>
        </Box>

        <Button
          onPress={handleSubmit(submitForm)}
          disabled={!formState.isValid}
          title="Criar nova nota"
          mt="s24"
          alignContent="flex-end"
          preset="outline"
        />
      </Box>
    </Screen>
  );
}

const $boxProps: ViewStyle = {
  borderWidth: 2,
  borderStyle: 'dashed',
  borderColor: 'gray',
  borderRadius: 16,
  minHeight: 120,
};

const $crossProps: ViewStyle = {
  borderWidth: 1,
  borderStyle: 'dashed',
  borderColor: 'gray',
  borderRadius: 15,
  height: 30,
  width: 30,
  alignItems: 'center',
};
