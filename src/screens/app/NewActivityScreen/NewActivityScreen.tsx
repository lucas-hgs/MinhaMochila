import React, {useState} from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {activityStorage, useActivityService, useToastService} from '@services';
import {dateUtils} from '@utils';
import dayjs from 'dayjs';
import {useForm} from 'react-hook-form';
import {DateType} from 'react-native-ui-datepicker/lib/typescript/src/types';

import {Box, Button, FormTextInputNote, Screen, Text} from '@components';

import {NewActivityCalendar} from './components/NewActivityCalendar';
import {newActivitySchema, NewActivitySchema} from './newActivitySchema';

const defaultValues: NewActivitySchema = {
  title: '',
  description: '',
  id: Date.now().toString(),
  date: {
    fullDate: '',
    hours: '',
  },
};

export function NewActivityScreen() {
  const [value, setValue] = useState<DateType>(dayjs());
  let newDate = dateUtils.formatDate(value?.toString());

  const {control, formState, handleSubmit} = useForm<NewActivitySchema>({
    resolver: zodResolver(newActivitySchema),
    defaultValues,
    mode: 'onChange',
  });
  const {saveActivity} = useActivityService();
  const {navigate} = useNavigation();
  const {showToast} = useToastService();

  async function submitForm(formValues: NewActivitySchema) {
    try {
      const oldValues = await activityStorage.get();
      formValues.id = Date.now().toString();
      formValues.date.fullDate = newDate.formatedDate;
      formValues.date.hours = newDate.formatedTime;

      if (oldValues === null) {
        const newArrList = [formValues];
        await activityStorage.set(newArrList);
        saveActivity(newArrList);
      } else {
        formValues.id = Date.now().toString();
        const newArrList = [...oldValues, formValues];
        await activityStorage.set(newArrList);
        saveActivity(newArrList);
      }
    } catch (error) {
      navigate('CreationScreen');
    } finally {
      showToast({message: 'Nova Atividade adicionada!', duration: 3000});
      navigate('HomeScreen');
    }
  }

  return (
    <Screen canGoBack scrollable>
      <Box justifyContent="space-between">
        <Box>
          <Box>
            <FormTextInputNote
              name="title"
              control={control}
              label="Título da Atividade"
              boxProps={{mt: 's16'}}
              maxLength={20}
              multiline={false}
            />

            <FormTextInputNote
              name="description"
              control={control}
              label="Breve descrição"
              boxProps={{mt: 's20'}}
              maxLength={20}
              multiline={false}
            />
          </Box>
        </Box>

        <Text mt="s8" preset="paragraphVariantMedium">
          Data da Atividade:
        </Text>

        <NewActivityCalendar value={value} setValue={setValue} />

        <Button
          onPress={handleSubmit(submitForm)}
          disabled={!formState.isValid}
          title="Criar nova atividade"
          mt="s24"
          alignContent="flex-end"
          preset="outline"
        />
      </Box>
    </Screen>
  );
}
