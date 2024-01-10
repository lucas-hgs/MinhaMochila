import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/app/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export function Router() {
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
