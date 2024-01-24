import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps} from '@components';
import {useAppSafeArea} from '@hooks';

import {ScrollViewContainer, ViewContainer, ScreenHeader} from './components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
  noPaddingHorizontal?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  title,
  noPaddingHorizontal = false,
  HeaderComponent,
  ...boxProps
}: ScreenProps) {
  const {top} = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          style={[{paddingTop: top}, style]}
          {...boxProps}>
          <ScreenHeader
            paddingHorizontal={noPaddingHorizontal ? 's24' : undefined}
            HeaderComponent={HeaderComponent}
            canGoBack={canGoBack}
            title={title}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
