import {useTheme} from '@shopify/restyle';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Theme} from '../../theme/theme';
import {Text} from '../Text/Text';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.backgroundDarkerOcean,
      }}>
      <Text preset="paragraphMedium" bold style={{color: colors.grayWhite}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
