import React from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';
import {useAppTheme} from '@hooks';

export function EmptyNoteList() {
  const {colors} = useAppTheme();
  const {navigate} = useNavigation();

  const $boxProps: StyleProp<ViewStyle> = {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.gray3,
    minHeight: 250,
  };

  return (
    <Pressable onPress={() => navigate('NewNoteScreen')}>
      <Box
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        style={$boxProps}>
        <Text preset="headingSmall" color="gray1">
          Você ainda não criou nenhuma nota
        </Text>
        <Text preset="headingSmall" color="gray1">
          comece apertando aqui
        </Text>
      </Box>
    </Pressable>
  );
}
