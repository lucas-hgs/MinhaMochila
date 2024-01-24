import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Activity, Note, activityListMock, noteListMock} from '@domain';

import {ActivityBox, NoteBox, Text} from '@components';

interface Props {
  list: 'Activities' | 'Notes';
}

export function ArchiveLists({list}: Props) {
  function renderActivityItem({item}: ListRenderItemInfo<Activity>) {
    return <ActivityBox activity={item} />;
  }

  function renderNoteItem({item}: ListRenderItemInfo<Note>) {
    return <NoteBox note={item} />;
  }

  return (
    <>
      {list === 'Activities' ? (
        <>
          <Text
            preset="headingMedium"
            bold
            color="darkPurple"
            mt="s24"
            mb="s24">
            Todas Atividades
          </Text>

          <FlatList
            data={activityListMock}
            keyExtractor={item => item.id.toString()}
            renderItem={renderActivityItem}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        <>
          <Text
            preset="headingMedium"
            bold
            color="darkPurple"
            mt="s24"
            mb="s24">
            Todas Notas
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={noteListMock}
            keyExtractor={item => item.id.toString()}
            renderItem={renderNoteItem}
          />
        </>
      )}
    </>
  );
}
