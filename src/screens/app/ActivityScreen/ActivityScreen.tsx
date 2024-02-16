import React, {useState} from 'react';

import {Activity, useActivityService} from '@services';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {EditActivity} from './components/EditActivity';
import {ReadActivity} from './components/ReadActivity';

export function ActivityScreen({route}: AppScreenProps<'ActivityScreen'>) {
  const [edit, setEdit] = useState(false);
  const {activity} = useActivityService();

  const actualActivity = activity?.filter(
    act => act.id === route.params.id,
  ) as Activity[];

  return (
    <Screen canGoBack>
      {edit === false ? (
        <>
          <ReadActivity actualActivity={actualActivity} />
          <Button
            title="Editar Atividade"
            mt="s48"
            onPress={() => setEdit(!edit)}
          />
          <Button title="Deletar Atividade" mt="s24" preset="danger" />
        </>
      ) : (
        <>
          <EditActivity actualActivity={actualActivity} />
        </>
      )}
    </Screen>
  );
}
