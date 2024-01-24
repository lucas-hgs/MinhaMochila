import React from 'react';

import {Box, Text, TouchableOpacityBox} from '@components';

interface Props {
  listActivities: () => void;
  listNotes: () => void;
  list: 'Activities' | 'Notes';
}

export function ArchiveButtons({list, listActivities, listNotes}: Props) {
  return (
    <Box flexDirection="row" justifyContent="center" columnGap="s16">
      <TouchableOpacityBox onPress={listActivities}>
        <Box
          minWidth={140}
          padding="s12"
          borderRadius="s12"
          backgroundColor={list === 'Activities' ? 'lightPurple' : 'lightBlue'}>
          <Text preset="headingSmall" textAlign="center">
            Atividades
          </Text>
        </Box>
      </TouchableOpacityBox>
      <TouchableOpacityBox onPress={listNotes}>
        <Box
          minWidth={140}
          padding="s12"
          borderRadius="s12"
          backgroundColor={list === 'Notes' ? 'lightPurple' : 'lightBlue'}>
          <Text preset="headingSmall" textAlign="center">
            Notas
          </Text>
        </Box>
      </TouchableOpacityBox>
    </Box>
  );
}
