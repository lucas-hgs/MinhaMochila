import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import {useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  boxProps?: BoxProps;
}

export function TextInputNote({
  label,
  errorMessage,
  boxProps,
  value,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const offset = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    const fontStyles =
      offset.value > 0
        ? {...$fontSizes.headingMedium}
        : {...$fontSizes.paragraphSmall};
    return {
      transform: [{translateY: offset.value}],
      ...fontStyles,
    };
  });

  function focusInput() {
    offset.value = withSpring(-15);
    inputRef.current?.focus();
  }

  function moveDown() {
    if (value?.length === 0) {
      offset.value = withSpring(1);
    }
  }

  const $textStyle: TextStyle = {
    color: colors.grayBlack,
    position: 'absolute',
    zIndex: 1,
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Animated.Text
          style={[$textStyle, animatedStyles]}
          onPress={focusInput}>
          {label}
        </Animated.Text>
        <Box>
          <RNTextInput
            onPressIn={focusInput}
            multiline
            ref={inputRef}
            onBlur={moveDown}
            style={[$textInputStyle, {color: colors.grayBlack}]}
            {...rnTextInputProps}
          />
        </Box>
        {errorMessage && (
          <Text color="error" bold preset="paragraphSmall">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  marginVertical: 5,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.headingMedium,
};
