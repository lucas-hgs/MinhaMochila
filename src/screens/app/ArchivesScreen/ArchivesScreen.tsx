import React, {useState} from 'react';

import {Box, Screen} from '@components';

import {ArchiveButtons} from './Components/ArchiveButtons';
import {ArchiveLists} from './Components/ArchiveLists';

type ListProps = 'Activities' | 'Notes';

export function ArchivesScreen() {
  const [list, setList] = useState<ListProps>('Activities');

  function listActivities() {
    setList('Activities');
  }

  function listNotes() {
    setList('Notes');
  }

  return (
    <Screen HeaderComponent title="Listar" canGoBack flex={1}>
      <Box flex={1}>
        <ArchiveButtons
          list={list}
          listActivities={listActivities}
          listNotes={listNotes}
        />

        <ArchiveLists list={list} />
      </Box>
    </Screen>
  );
}
