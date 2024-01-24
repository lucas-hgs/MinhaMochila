import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {AppStack} from './AppStack';

export function Router() {
  return (
    <NavigationContainer>
      <LinearGradient colors={['#D8CFFB', '#FAF0D7']} style={{flex: 1}}>
        <AppStack />
      </LinearGradient>
    </NavigationContainer>
  );
}
