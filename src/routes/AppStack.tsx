import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  NewNoteScreen,
  NewActivityScreen,
  CreationScreen,
} from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  NewNoteScreen: undefined;
  NewActivityScreen: undefined;
  CreationScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
      initialRouteName="CreationScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewNoteScreen" component={NewNoteScreen} />
      <Stack.Screen name="NewActivityScreen" component={NewActivityScreen} />
      <Stack.Screen name="CreationScreen" component={CreationScreen} />
    </Stack.Navigator>
  );
}
