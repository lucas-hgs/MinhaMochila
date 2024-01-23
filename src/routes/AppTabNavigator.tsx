import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from '@components';
import {useAppTheme} from '@hooks';
import {CreationScreen, HomeScreen, NewNoteScreen} from '@screens';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  CreationScreen: undefined;
  NewNoteScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  const {colors} = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.lightPurple,
        tabBarInactiveBackgroundColor: colors.lightPurple,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="home" />,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="add" />,
        }}
        name="CreationScreen"
        component={CreationScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="note" />,
        }}
        name="NewNoteScreen"
        component={NewNoteScreen}
      />
    </Tab.Navigator>
  );
}
