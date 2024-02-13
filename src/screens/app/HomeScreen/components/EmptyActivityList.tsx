import React from 'react';
import {Dimensions, Pressable, StyleProp, ViewStyle} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text} from '@components';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function EmptyActivityList() {
  const {navigate} = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigate('NewActivityScreen');
      }}>
      <Box mt="s20" style={$boxStyle} backgroundColor="grayWhite">
        <Box style={$boxIconStyle}>
          <Icon name="activity" />
        </Box>
        <Box mt="s12">
          <Text preset="paragraphMedium" color="lightBlue" textAlign="center">
            Você ainda não criou nenhuma atividade
          </Text>

          <Text preset="paragraphSmall" color="lightBlue" textAlign="center">
            registre sua primeira atividade apertando aqui
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}

const $boxStyle: StyleProp<ViewStyle> = {
  minHeight: 130,
  maxHeight: 130,
  width: MAX_WIDTH,
  borderRadius: 16,
  borderTopRightRadius: 32,
  justifyContent: 'center',
  marginHorizontal: 12,
};

const $boxIconStyle: StyleProp<ViewStyle> = {
  marginTop: -35,
  alignItems: 'center',
};
