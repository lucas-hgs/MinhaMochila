import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, NewNoteScreen} from '@screens';

export type RootStackParamList = {
  HomeScreen: undefined;
  NewNoteScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewNoteScreen" component={NewNoteScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
