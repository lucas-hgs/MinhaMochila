import React from 'react';
import {ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: React.ReactNode;
}

export function ScrollViewContainer({children}: Props) {
  return (
    <LinearGradient colors={['#D8CFFB', '#FAF0D7']} style={{flex: 1}}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
}

export function ViewContainer({children}: Props) {
  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={['#D8CFFB', '#FAF0D7']} style={{flex: 1}}>
        {children}
      </LinearGradient>
    </View>
  );
}
