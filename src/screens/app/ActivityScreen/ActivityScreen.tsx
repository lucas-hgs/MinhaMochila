import React, {useState} from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {
  Activity,
  activityStorage,
  useActivityService,
  useToastService,
} from '@services';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {EditActivity} from './components/EditActivity';
import {ReadActivity} from './components/ReadActivity';

export function ActivityScreen({route}: AppScreenProps<'ActivityScreen'>) {
  const [edit, setEdit] = useState(false);
  const {activity, saveActivity} = useActivityService();
  const {showToast} = useToastService();
  const {navigate} = useNavigation();

  const actualActivity = activity?.filter(
    act => act.id === route.params.id,
  ) as Activity[];

  function deleteConfirmation() {
    Alert.alert(
      'Você realmente quer deletar a atividade?',
      'Após confirmar, sua atividade será deletada permanentemente!',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: deleteActivity,
        },
      ],
    );
  }

  async function deleteActivity() {
    try {
      navigate('HomeScreen');

      const updatedActivityList = activity?.filter(
        item => item.id !== route.params.id,
      ) as Activity[];

      await activityStorage.set(updatedActivityList);
      saveActivity(updatedActivityList);
    } catch (error) {
      showToast({
        message:
          'Não é possível deletar essa atividade agora, tente mais tarde!',
        duration: 3000,
      });
    } finally {
      showToast({message: 'Atividade deletada com sucesso!', duration: 3000});
    }
  }

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
          <Button
            title="Deletar Atividade"
            mt="s24"
            preset="danger"
            onPress={deleteConfirmation}
          />
        </>
      ) : (
        <>
          <EditActivity actualActivity={actualActivity} />
        </>
      )}
    </Screen>
  );
}
