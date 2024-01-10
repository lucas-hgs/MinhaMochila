import React, {useRef, useState} from 'react';

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
import {useAppTheme} from '../../hooks/useAppTheme';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  boxProps?: BoxProps;
  heading?: 'medium' | 'large';
}

export function TextInputNote({
  label,
  errorMessage,
  boxProps,
  heading = 'large',
  ...rnTextInputProps
}: TextInputProps) {
  let fonts =
    heading === 'large' ? $fontSizes.headingLarge : $fontSizes.headingMedium;
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const [title, setTitle] = useState('');

  function focusInput() {
    offset.value = withSpring(0);
    inputRef.current?.focus();
  }

  const $textInputContainer: BoxProps = {};

  const offset = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: offset.value,
      //transform: [{translateY: offset.value}],
    };
  });

  function moveDown() {
    if (title.length === 0) {
      offset.value = withSpring(1);
    }
  }

  const $textStyle: TextStyle = {
    fontFamily: $fontFamily.black,
    ...fonts,
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
        <Box {...$textInputContainer}>
          <RNTextInput
            onChangeText={newText => setTitle(newText)}
            defaultValue={title}
            ref={inputRef}
            onBlur={moveDown}
            placeholderTextColor={colors.gray2}
            style={[$textInputStyle, {color: colors.darkPurple}]}
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
  fontFamily: $fontFamily.black,
  ...$fontSizes.headingMedium,
};
