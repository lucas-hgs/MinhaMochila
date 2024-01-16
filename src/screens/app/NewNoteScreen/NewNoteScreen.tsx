import React from 'react';
import {ViewStyle} from 'react-native/types';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInputNote} from '../../../components/TextInputNote/TextInputNote';

export function NewNoteScreen() {
  return (
    <Screen canGoBack scrollabe>
      <Box justifyContent="space-between">
        <Box>
          <Box>
            <TextInputNote
              label="Título da Nota"
              boxProps={{mt: 's16'}}
              maxLength={25}
            />
            <TextInputNote
              label="Escreva suas anotações"
              boxProps={{mt: 's24'}}
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
