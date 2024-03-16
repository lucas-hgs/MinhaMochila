import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {noteStorage, useNoteService, useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Box, Button, FormTextInputNote, Screen} from '@components';

import {newNoteSchema, NewNoteSchema} from './newNoteSchema';

const defaultValues: NewNoteSchema = {
  title: '',
  description: '',
  id: Date.now().toString(),
};

export function NewNoteScreen() {
  const {control, formState, handleSubmit} = useForm<NewNoteSchema>({
    resolver: zodResolver(newNoteSchema),
    defaultValues,
    mode: 'onChange',
  });
  const {saveNote} = useNoteService();
  const {showToast} = useToastService();
  const {navigate} = useNavigation();

  async function submitForm(formValues: NewNoteSchema) {
    try {
      const oldValues = await noteStorage.get();

      if (oldValues === null) {
        formValues.id = Date.now().toString();
        const newArrList = [formValues];
        await noteStorage.set(newArrList);
        saveNote(newArrList);
      } else {
        formValues.id = Date.now().toString();
        const newArrList = [...oldValues, formValues];
        await noteStorage.set(newArrList);
        saveNote(newArrList);
      }
    } catch (error) {
      navigate('CreationScreen');
    } finally {
      showToast({message: 'Nova Nota adicionada!', duration: 3000});
      navigate('HomeScreen');
    }
  }

  return (
    <Screen canGoBack scrollable>
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
