import React, {useState} from 'react';

import {Activity, useActivityService} from '@services';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

import {ReadActivity} from './components/ReadActivity';

export function ActivityScreen({route}: AppScreenProps<'ActivityScreen'>) {
  const [edit, setEdit] = useState(false);
  const {activity} = useActivityService();

  const actualActivity = activity?.filter(
    act => act.id === route.params.id,
  ) as Activity[];

  return (
    <Screen canGoBack>
      <ReadActivity actualActivity={actualActivity} />
      <Button title="Editar Atividade" mt="s48" />
      <Button title="Deletar Atividade" mt="s24" preset="danger" />
    </Screen>
  );
}
