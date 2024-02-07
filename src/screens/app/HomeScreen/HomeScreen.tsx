/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {activityListMock, Activity, Note} from '@domain';
import {asyncStorage} from '@services';

import {
  HeaderProfile,
  NoteBox,
  ScheduleActivity,
  Screen,
  Text,
} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  useEffect(() => {
    asyncStorage.clear();
  }, []);

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
        data={null}
        keyExtractor={item => item.id.toString()}
        renderItem={renderNoteItem}
        ListEmptyComponent={<Text>Não há itens</Text>}
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
