import React, {useState} from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Note, noteStorage, useNoteService, useToastService} from '@services';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {EditNote} from './components/EditNote';
import {ReadNote} from './components/ReadNote';

export function NoteScreen({route}: AppScreenProps<'NoteScreen'>) {
  const [edit, setEdit] = useState(false);
  const {note, saveNote} = useNoteService();
  const {showToast} = useToastService();
  const {navigate} = useNavigation();

  const actualNote = note?.filter(nt => nt.id === route.params.id) as Note[];

  function deleteConfirmation() {
    Alert.alert(
      'Você realmente quer deletar a nota?',
      'Após confirmar, sua nota será deletada permanentemente!',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: deleteNote,
        },
      ],
    );
  }

  async function deleteNote() {
    try {
      navigate('HomeScreen');

      const updatedNoteList = note?.filter(
        item => item.id !== route.params.id,
      ) as Note[];

      await noteStorage.set(updatedNoteList);
      saveNote(updatedNoteList);
    } catch (error) {
      showToast({
        message: 'Não é possível deletar essa nota agora, tente mais tarde!',
        duration: 3000,
      });
    } finally {
      showToast({message: 'Atividade deletada com sucesso!', duration: 3000});
    }
  }

  return (
    <Screen scrollable canGoBack>
      {edit === false ? (
        <>
          <ReadNote actualNote={actualNote} />

          <Button title="Editar Nota" mt="s48" onPress={() => setEdit(!edit)} />
          <Button
            title="Deletar Nota"
            mt="s24"
            mb="s24"
            preset="danger"
            onPress={deleteConfirmation}
          />
        </>
      ) : (
        <>{<EditNote actualNote={actualNote} />}</>
      )}
    </Screen>
  );
}
