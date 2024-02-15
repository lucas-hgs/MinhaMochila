/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Activity, Note} from '@domain';
import {useActivityService, useNoteService} from '@services';

import {
  HeaderProfile,
  NoteBox,
  ScheduleActivity,
  Screen,
  Text,
} from '@components';
import {AppTabScreenProps} from '@routes';

import {EmptyActivityList} from './components/EmptyActivityList';
import {EmptyNoteList} from './components/EmptyNoteList';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const {note} = useNoteService();
  const {activity} = useActivityService();

  function renderActivityItem({item}: ListRenderItemInfo<Activity>) {
    return <ScheduleActivity activity={item} key={item.id} />;
  }

  function renderNoteItem({item}: ListRenderItemInfo<Note>) {
    return <NoteBox note={item} key={item.id} />;
  }

  return (
    <Screen style={$screen}>
      <HeaderProfile />

      <Text preset="headingMedium" bold color="darkPurple" mb="s8">
        Atividades Marcadas
      </Text>

      <FlatList
        data={activity}
        keyExtractor={item => item.id.toString()}
        renderItem={renderActivityItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<EmptyActivityList />}
        style={$activityList}
      />

      <Text preset="headingMedium" bold color="darkPurple" mb="s24" mt="s24">
        Notas Recentes
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={note}
        keyExtractor={item => item.id.toString()}
        renderItem={renderNoteItem}
        ListEmptyComponent={<EmptyNoteList />}
        style={{
          minHeight: 130,
        }}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
};

const $activityList: StyleProp<ViewStyle> = {
  minHeight: 160,
  marginHorizontal: -24,
  paddingHorizontal: 8,
};
