import React from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';

import {Activity} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text} from '@components';

export interface Props {
  activity: Activity;
}

export function ScheduleActivity({activity}: Props) {
  const {navigate} = useNavigation();

  return (
    <Pressable
      onPress={() => navigate('ActivityScreen', {id: activity.id})}
      key={activity.id}>
      <Box mt="s20" mr="s16" style={$boxStyle}>
        <Box style={$boxIconStyle}>
          <Icon name="activity" />
        </Box>
        <Box paddingLeft="s10">
          <Text preset="paragraphSmall" color="lightBlue">
            {activity.title}
          </Text>
          <Text preset="paragraphCaptionSmall" color="purple">
            {activity.description}
          </Text>
          <Text preset="paragraphSmall" color="lightBlue">
            {activity.date.fullDate}
          </Text>
          <Text preset="paragraphCaption" color="purple">
            {activity.date.hours}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}

const $boxStyle: StyleProp<ViewStyle> = {
  minHeight: 130,
  maxHeight: 130,
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
