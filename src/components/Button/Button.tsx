import {useTheme} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Theme} from '../../theme/theme';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <TouchableOpacityBox
      height={50}
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundColor: colors.backgroundDarkerOcean,
      }}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: colors.grayWhite}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
