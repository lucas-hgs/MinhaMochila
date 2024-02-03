import React, {useState} from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
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
};

export function NewActivityScreen() {
  const [value, setValue] = useState<DateType>(dayjs());
  const {control, formState, handleSubmit} = useForm<NewActivitySchema>({
    resolver: zodResolver(newActivitySchema),
    defaultValues,
    mode: 'onChange',
  });

  function submitForm(formValues: NewActivitySchema) {
    console.log(formValues);
    const newDate = dateUtils.formatDate(value);
    console.log(
      `Agendamento para o dia: ${newDate.formatedDate} as ${newDate.formatedTime}`,
    );
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
