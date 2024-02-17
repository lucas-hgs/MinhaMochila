import React from 'react';
import {TextStyle} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {Note, noteStorage, useNoteService, useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  $fontFamily,
  $fontSizes,
  Box,
  Button,
  FormTextInput,
  Text,
} from '@components';

import {EditNoteSchema, editNoteSchema} from './editNoteSchema';

interface Props {
  actualNote: Note[];
}

export function EditNote({actualNote}: Props) {
  const {navigate} = useNavigation();
  const {saveNote} = useNoteService();
  const {showToast} = useToastService();

  const defaultValues: EditNoteSchema = {
    title: actualNote[0].title,
    description: actualNote[0].description,
    id: actualNote[0].id,
  };

  const {control, formState, handleSubmit} = useForm<EditNoteSchema>({
    resolver: zodResolver(editNoteSchema),
    defaultValues,
    mode: 'onChange',
  });

  async function submitForm(formValues: EditNoteSchema) {
    try {
      const oldValues = (await noteStorage.get()) as Note[];

      oldValues.find(item => {
        if (item.id === formValues.id) {
          item.title = formValues.title;
          item.description = formValues.description;
        }
      });

      await noteStorage.set(oldValues);
      saveNote(oldValues);
    } catch (error) {
      navigate('CreationScreen');
    } finally {
      showToast({message: 'Nota alterada com sucesso!', duration: 3000});
      navigate('HomeScreen');
    }
  }

  return (
    <Box>
      <Text
        textAlign="center"
        preset="headingMedium"
        color="darkPurple"
        mb="s24">
        Editando Nota:
      </Text>
      <FormTextInput
        name="title"
        control={control}
        label="Altere o título da nota:"
        boxProps={{
          mb: 's8',
        }}
        style={$textInputStyle}
      />

      <FormTextInput
        multiline
        name="description"
        control={control}
        label="Altere a descrição da nota:"
        boxProps={{
          mb: 's8',
        }}
        style={$textInputStyle}
      />

      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Salvar alterações"
        mt="s24"
        mb="s24"
        alignContent="flex-end"
        preset="outline"
      />
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  marginVertical: 5,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.headingSmall,
};
