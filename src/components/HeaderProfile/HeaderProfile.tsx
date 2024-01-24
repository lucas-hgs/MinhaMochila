import React from 'react';
import {
  Dimensions,
  Image,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native/';

import {Box, Text} from '@components';

export function HeaderProfile() {
  return (
    <Box
      backgroundColor="lightPurple"
      overflow="visible"
      height={200}
      width={Dimensions.get('screen').width}
      style={$boxStyle}>
      <Box padding="s24" flexDirection="row" alignItems="center">
        <Image
          borderRadius={16}
          resizeMode="cover"
          style={$image}
          source={require('../../assets/images/profile.jpg')}
        />
        <Box ml="s12">
          <Text preset="headingMedium" color="darkPurple">
            Bem vinda,{' '}
            <Text color="blue" preset="headingMedium">
              Carine
            </Text>
          </Text>
          <Text preset="paragraphSmall">Vamos explorar suas atividades!</Text>
        </Box>
      </Box>
    </Box>
  );
}

const $boxStyle: StyleProp<ViewStyle> = {
  marginTop: -50,
  marginLeft: -24,
  marginBottom: -100,
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
};

const $image: StyleProp<ImageStyle> = {
  width: 48,
  height: 48,
};
