import React from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';

import {Note} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';
import {useAppTheme} from '@hooks';

interface Props {
  note: Note;
}

export function NoteBox({note}: Props) {
  const {navigate} = useNavigation();
  const {colors} = useAppTheme();
  let color: any;

  const randomColors = [1, 2, 3, 4, 5];

  let index = Math.floor(Math.random() * randomColors.length);

  switch (index) {
    case 0:
      color = colors.cream;
      break;
    case 1:
      color = colors.greenSuccessLight;
      break;
    case 2:
      color = colors.lightPink;
      break;
    case 3:
      color = colors.lightBlue;
      break;
    case 4:
      color = colors.lightPurple;
      break;
  }

  const $boxStyle: StyleProp<ViewStyle> = {
    minHeight: 110,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderBottomLeftRadius: 46,
    borderColor: color,
    borderLeftWidth: 8,
    borderBottomWidth: 8,
  };

  return (
    <Pressable
      onPress={() => navigate('NoteScreen', {id: note.id})}
      key={note.id}>
      <Box key={note.id} style={$boxStyle} padding="s14" mb="s24">
        <Text bold preset="headingMedium" color="darkPurple">
          {note.title}
        </Text>
        <Text preset="paragraphMedium" color="purple" numberOfLines={3}>
          {note.description}
        </Text>
      </Box>
    </Pressable>
  );
}
