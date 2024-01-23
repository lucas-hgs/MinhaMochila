import React from 'react';
import {Dimensions} from 'react-native';

import {Box, Button, Icon, Screen, Text} from '@components';

export function CreationScreen() {
  const dimesionWidow = Dimensions.get('window').height;
  const FIXED_DIMESION = dimesionWidow - (dimesionWidow * 25) / 100;

  return (
    <Screen>
      <Box height={FIXED_DIMESION} justifyContent="center" mb="s56">
        <Box
          height={180}
          backgroundColor="grayWhite"
          borderRadius="s16"
          justifyContent="center">
          <Box position="absolute" top={-35} alignSelf="center">
            <Icon name="activity" />
          </Box>
          <Text textAlign="center" preset="headingMedium" mt="s16" mb="s8">
            Criar uma nova Atividade
          </Text>
          <Text preset="paragraphMedium" textAlign="center">
            Atividades são lembretes para que você não esqueça quando há algo
            marcado, como uma prova, atividade avaliativa ou trabalhos
          </Text>
        </Box>

        <Box
          mt="s56"
          height={180}
          backgroundColor="grayWhite"
          borderRadius="s16"
          justifyContent="center">
          <Box position="absolute" top={-50} alignSelf="center">
            <Icon name="note" />
          </Box>
          <Text textAlign="center" preset="headingMedium" mt="s16" mb="s8">
            Criar uma nova Nota
          </Text>
          <Text preset="paragraphMedium" textAlign="center">
            As notas são as suas anotações pessoais, você pode criar uma nova
            nota sempre que achar necessário e incluir imagens
          </Text>
        </Box>
      </Box>
      <Button title="Voltar" />
    </Screen>
  );
}
