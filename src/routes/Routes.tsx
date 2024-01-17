import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/app/HomeScreen/HomeScreen';
import {NewNoteScreen} from '../screens/app/NewNoteScreen/NewNoteScreen';

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
