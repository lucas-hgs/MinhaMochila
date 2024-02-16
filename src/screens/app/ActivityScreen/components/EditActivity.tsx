import React, {useState} from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {
  Activity,
  activityStorage,
  useActivityService,
  useToastService,
} from '@services';
import {dateUtils} from '@utils';
import dayjs from 'dayjs';
import {useForm} from 'react-hook-form';
import {DateType} from 'react-native-ui-datepicker';

import {Box, Button, FormTextInput, Text} from '@components';

import {NewActivityCalendar} from '../../NewActivityScreen/components/NewActivityCalendar';

import {EditActivitySchema, editActivitySchema} from './editActivitySchema';

interface Props {
  actualActivity: Activity[];
}

export function EditActivity({actualActivity}: Props) {
  const formattedDate = dateUtils.formatDateToISO(
    actualActivity[0].date.fullDate,
  );
  const newDateWithHours = formattedDate + ' ' + actualActivity[0].date.hours;

  const [value, setValue] = useState<DateType>(dayjs(newDateWithHours));
  const {navigate} = useNavigation();
  const {saveActivity} = useActivityService();
  const {showToast} = useToastService();

  const defaultValues: EditActivitySchema = {
    title: actualActivity[0].title,
    description: actualActivity[0].description,
    id: actualActivity[0].id,
    date: {
      fullDate: actualActivity[0].date.fullDate,
      hours: actualActivity[0].date.hours,
    },
  };

  const {control, formState, handleSubmit} = useForm<EditActivitySchema>({
    resolver: zodResolver(editActivitySchema),
    defaultValues,
    mode: 'onChange',
  });

  async function submitForm(formValues: EditActivitySchema) {
    let newDate = dateUtils.formatDate(value?.toString());
    try {
      const oldValues = (await activityStorage.get()) as Activity[];

      formValues.date.fullDate = newDate.formatedDate;
      formValues.date.hours = newDate.formatedTime;

      oldValues.find(item => {
        if (item.id === formValues.id) {
          item.date.fullDate = formValues.date.fullDate;
          item.date.hours = formValues.date.hours;
          item.title = formValues.title;
          item.description = formValues.description;
        }
      });

      await activityStorage.set(oldValues);
      saveActivity(oldValues);
    } catch (error) {
      navigate('CreationScreen');
    } finally {
      showToast({message: 'Atividade alterada com sucesso!', duration: 3000});
      navigate('HomeScreen');
    }
  }

  return (
    <Box>
      <Text
        textAlign="center"
        preset="headingMedium"
        color="darkPurple"
        mb="s24">
        Editando Atividade:
      </Text>
      <FormTextInput
        name="title"
        control={control}
        label="Altere o título da atividade:"
        boxProps={{
          mb: 's8',
        }}
      />

      <FormTextInput
        name="description"
        control={control}
        label="Altere a descrição da atividade:"
        boxProps={{
          mb: 's8',
        }}
      />

      <Text>Selecione a nova data:</Text>
      <NewActivityCalendar value={value} setValue={setValue} />

      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Salvar alterações"
        mt="s24"
        alignContent="flex-end"
        preset="outline"
      />
    </Box>
  );
}
