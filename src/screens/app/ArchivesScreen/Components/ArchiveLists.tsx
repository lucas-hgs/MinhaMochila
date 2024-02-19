import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Activity, Note} from '@domain';
import {useActivityService, useNoteService} from '@services';

import {NoteBox, ScheduleActivity, Text} from '@components';

interface Props {
  list: 'Activities' | 'Notes';
}

export function ArchiveLists({list}: Props) {
  const {activity} = useActivityService();
  const {note} = useNoteService();

  function renderActivityItem({item}: ListRenderItemInfo<Activity>) {
    return <ScheduleActivity activity={item} key={item.id} />;
  }

  function renderNoteItem({item}: ListRenderItemInfo<Note>) {
    return <NoteBox note={item} key={item.id} />;
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
            data={activity}
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
            data={note}
            keyExtractor={item => item.id.toString()}
            renderItem={renderNoteItem}
          />
        </>
      )}
    </>
  );
}
