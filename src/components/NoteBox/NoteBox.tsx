import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

interface Props {
  color?: ThemeColors;
}

export function NoteBox({color = 'blue'}: Props) {
  const {colors} = useAppTheme();

  const $boxStyle: StyleProp<ViewStyle> = {
    minHeight: 110,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderBottomLeftRadius: 46,
    borderColor: colors[color],
    borderLeftWidth: 8,
    borderBottomWidth: 8,
  };

  return (
    <Box style={$boxStyle} padding="s14" mt="s24">
      <Text bold preset="headingMedium" color="darkPurple">
        Título
      </Text>
      <Text preset="paragraphMedium" color="purple" numberOfLines={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        diam ipsum. Maecenas in mauris consectetur, dictum ligula ut, finibus
        tortor. Nullam malesuada molestie lacus eget luctus. Proin quis
        fringilla nisi. Nullam velit neque, aliquet ut ultricies malesuada,
        scelerisque molestie magna.
      </Text>
    </Box>
  );
}
