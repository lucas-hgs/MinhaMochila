import React from 'react';
import {Dimensions, Image} from 'react-native/';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

export function HeaderProfile() {
  return (
    <Box
      backgroundColor="lightPurple"
      overflow="visible"
      height={200}
      width={Dimensions.get('screen').width}
      style={{
        marginTop: -24,
        marginLeft: -24,
        marginBottom: -100,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
      }}>
      <Box padding="s24" flexDirection="row" alignItems="center">
        <Image
          borderRadius={16}
          resizeMode="cover"
          style={{
            width: 48,
            height: 48,
          }}
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
