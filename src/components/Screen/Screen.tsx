import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
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
            <Box mb="s24" flexDirection="row">
              <Icon name="arrowLeft" />
              <Text semiBold preset="paragraphMedium" ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
