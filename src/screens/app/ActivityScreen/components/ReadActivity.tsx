import React from 'react';

import {Activity} from '@domain';

import {Box, Text} from '@components';

interface Props {
  actualActivity: Activity[];
}

export function ReadActivity({actualActivity}: Props) {
  return (
    <Box>
      <Text preset="headingLarge" textAlign="center" color="darkPurple">
        {actualActivity[0].title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {actualActivity[0].description}
      </Text>
      <Text mt="s16" preset="paragraphMedium">
        Atividade agendada para o dia: {actualActivity[0].date.fullDate}
      </Text>
      <Text mt="s16" preset="paragraphMedium">
        Para o horário: {actualActivity[0].date.hours}
      </Text>
      <Text
        mt="s24"
        preset="headingLarge"
        textAlign="center"
        color="darkPurple"
        opacity={0.5}>
        Dicas:
      </Text>
      <Text mt="s12" opacity={0.5}>
        1. Conheça os critérios de avaliação: Entenda como você será avaliado
        antes de começar.
      </Text>
      <Text mt="s12" opacity={0.5}>
        2. Gerencie seu tempo: Divida a atividade em etapas e estabeleça prazos
        para cada uma delas.
      </Text>
      <Text mt="s12" opacity={0.5}>
        3. Pesquise fontes confiáveis: Use fontes confiáveis e relevantes para
        sua pesquisa.
      </Text>
      <Text mt="s12" opacity={0.5}>
        4. Mantenha o foco no objetivo: Lembre-se sempre do objetivo principal
        da atividade.
      </Text>
      <Text mt="s12" opacity={0.5}>
        5. Revise seu trabalho: Dedique tempo para revisar e editar seu trabalho
        antes de entregá-lo.
      </Text>
    </Box>
  );
}
