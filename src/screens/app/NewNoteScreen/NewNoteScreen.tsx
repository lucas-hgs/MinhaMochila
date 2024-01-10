import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {TextInputNote} from '../../../components/TextInputNote/TextInputNote';

export function NewNoteScreen() {
  return (
    <Screen canGoBack>
      <TextInputNote label="Título da Nota" boxProps={{mt: 's8'}} />
      <TextInputNote
        heading="medium"
        label="Escreva suas anotações aqui..."
        boxProps={{mt: 's24'}}
      />
    </Screen>
  );
}
