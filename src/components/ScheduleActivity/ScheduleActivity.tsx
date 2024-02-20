import React from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';

import {Activity} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text} from '@components';

export interface Props {
  activity: Activity;
  type?: 'box' | 'full';
}

export function ScheduleActivity({activity, type = 'box'}: Props) {
  const {navigate} = useNavigation();

  return (
    <Pressable
      onPress={() => navigate('ActivityScreen', {id: activity.id})}
      key={activity.id}>
      <Box mt="s20" mr="s16" style={type === 'full' ? $fullStyle : $boxStyle}>
        <Box style={$boxIconStyle}>
          <Icon name="activity" />
        </Box>
        <Box style={type === 'full' ? $fullStyleBox : {paddingLeft: 10}}>
          <Box>
            <Text preset="paragraphSmall" color="lightBlue" numberOfLines={1}>
              {activity.title}
            </Text>
            <Text
              preset="paragraphCaptionSmall"
              color="purple"
              numberOfLines={1}>
              {activity.description}
            </Text>
          </Box>
          <Box>
            <Text preset="paragraphSmall" color="lightBlue">
              {activity.date.fullDate}
            </Text>
            <Text preset="paragraphCaption" color="purple">
              {activity.date.hours}
            </Text>
          </Box>
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

const $fullStyle: StyleProp<ViewStyle> = {
  minHeight: 100,
  maxHeight: 130,
  backgroundColor: '#FFF',
  borderRadius: 16,
  borderTopRightRadius: 32,
  justifyContent: 'center',
};

const $fullStyleBox: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  justifyContent: 'space-around',
};

const $boxIconStyle: StyleProp<ViewStyle> = {
  marginTop: -35,
  alignItems: 'center',
};
