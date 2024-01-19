import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {Activity} from '@domain';

import {Box, Icon, Text} from '@components';

export interface Props {
  activity: Activity;
}

export function ScheduleActivity({activity}: Props) {
  return (
    <Box mt="s20" mr="s16" style={$boxStyle}>
      <Box style={$boxIconStyle}>
        <Icon name="activity" />
      </Box>
      <Box paddingLeft="s10">
        <Text preset="paragraphSmall" color="lightBlue">
          {activity.title}
        </Text>
        <Text preset="paragraphCaptionSmall" color="purple">
          {activity.text}
        </Text>
        <Text preset="paragraphSmall" color="lightBlue">
          {activity.date}
        </Text>
      </Box>
    </Box>
  );
}

const $boxStyle: StyleProp<ViewStyle> = {
  minHeight: 130,
  width: 130,
  backgroundColor: '#FFF',
  borderRadius: 16,
  borderTopRightRadius: 32,
  justifyContent: 'center',
};

const $boxIconStyle: StyleProp<ViewStyle> = {
  marginTop: -35,
  alignItems: 'center',
};
