/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'dayjs/locale/pt-br';

import DateTimePicker, {DateType} from 'react-native-ui-datepicker';

import {Box} from '@components';
import {useAppTheme} from '@hooks';

interface Props {
  value: DateType;
  setValue: (value: DateType) => void;
}

export function NewActivityCalendar({value, setValue}: Props) {
  const {colors} = useAppTheme();
  const locale = 'pt-br';

  return (
    <Box
      mt="s16"
      mb="s24"
      backgroundColor="lightPurple"
      borderWidth={1}
      borderColor={'grayBlack'}
      borderRadius="s12">
      <DateTimePicker
        value={value}
        onValueChange={date => setValue(date)}
        locale={locale}
        displayFullDays
        selectedTextStyle={{
          color: colors.grayBlack,
          fontWeight: '700',
        }}
        selectedItemColor={colors.cream}
        headerContainerStyle={{
          borderTopStartRadius: 12,
          borderTopEndRadius: 12,
          backgroundColor: colors.cream,
          borderBottomWidth: 1,
          borderColor: colors.grayBlack,
        }}
        headerTextStyle={{
          textTransform: 'uppercase',
        }}
        weekDaysContainerStyle={{
          borderBottomWidth: 1,
          borderColor: colors.grayBlack,
        }}
        weekDaysTextStyle={{
          fontWeight: 'bold',
        }}
      />
    </Box>
  );
}
