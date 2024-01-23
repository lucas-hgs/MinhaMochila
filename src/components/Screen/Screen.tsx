import React from 'react';
import {KeyboardAvoidingView, Platform, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text} from '@components';
import {useAppSafeArea} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollabe?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollabe = false,
  style,
}: ScreenProps) {
  const navigation = useNavigation();
  const {top, bottom} = useAppSafeArea();

  const Container = scrollabe ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container>
        <Box
          paddingHorizontal="s24"
          style={[{paddingVertical: top, paddingBottom: bottom}, style]}>
          {canGoBack && (
            <Pressable onPress={navigation.goBack}>
              <Box mb="s24" flexDirection="row" alignItems="center">
                <Icon name="arrowLeft" />
                <Text semiBold preset="paragraphMedium" ml="s8">
                  Voltar
                </Text>
              </Box>
            </Pressable>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
