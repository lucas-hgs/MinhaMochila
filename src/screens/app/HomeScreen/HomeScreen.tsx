/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';
import {HeaderProfile} from '../../../components/HeaderProfile/HeaderProfile';
import {NoteBox} from '../../../components/NoteBox/NoteBox';
import {ScheduleActivity} from '../../../components/ScheduleActivity/ScheduleActivity';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {activityListMock} from '../../../domain/Activities.ts/activityListMock';
import {Activity} from '../../../domain/Activities.ts/types';
import {noteListMock} from '../../../domain/Notes/noteListMock';
import {Note} from '../../../domain/Notes/types';

export function HomeScreen() {
  function renderActivityItem({item}: ListRenderItemInfo<Activity>) {
    return <ScheduleActivity activity={item} />;
  }

  function renderNoteItem({item}: ListRenderItemInfo<Note>) {
    return <NoteBox note={item} />;
  }

  return (
    <Screen style={$screen}>
      <HeaderProfile />

      <Text preset="headingMedium" bold color="darkPurple" mb="s8">
        Atividades Marcadas
      </Text>

      <FlatList
        data={activityListMock}
        keyExtractor={item => item.id.toString()}
        renderItem={renderActivityItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={$activityList}
      />

      <Text preset="headingMedium" bold color="darkPurple" mb="s24" mt="s24">
        Notas Recentes
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteListMock}
        keyExtractor={item => item.id.toString()}
        renderItem={renderNoteItem}
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
