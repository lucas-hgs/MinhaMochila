import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NewNoteScreen, NewActivityScreen, CreationScreen} from '@screens';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
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
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="NewNoteScreen" component={NewNoteScreen} />
      <Stack.Screen name="NewActivityScreen" component={NewActivityScreen} />
      <Stack.Screen name="CreationScreen" component={CreationScreen} />
    </Stack.Navigator>
  );
}
