import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

export function ScheduleActivity() {
  return (
    <Box mt="s20" mr="s16" style={$boxStyle}>
      <Box style={{marginTop: -35, overflow: 'visible', alignItems: 'center'}}>
        <Icon name="activity" />
      </Box>
      <Box paddingLeft="s10">
        <Text preset="paragraphSmall" color="lightBlue">
          Prova
        </Text>
        <Text preset="paragraphSmall" color="purple">
          Matemática
        </Text>
        <Text preset="paragraphSmall" color="lightBlue">
          06.set.2023
        </Text>
      </Box>
    </Box>
  );
}

const $boxStyle: StyleProp<ViewStyle> = {
  height: 130,
  width: 130,
  backgroundColor: '#FFF',
  borderRadius: 16,
  borderTopRightRadius: 32,
  justifyContent: 'center',
};
