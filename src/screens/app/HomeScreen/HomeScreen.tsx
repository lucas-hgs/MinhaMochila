import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import {Box} from '../../../components/Box/Box';
import {HeaderProfile} from '../../../components/HeaderProfile/HeaderProfile';
import {NoteBox} from '../../../components/NoteBox/NoteBox';
import {ScheduleActivity} from '../../../components/ScheduleActivity/ScheduleActivity';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';

export function HomeScreen() {
  return (
    <Screen scrollabe>
      <HeaderProfile />

      <Box>
        <Text preset="headingMedium" bold color="darkPurple" mb="s8">
          Atividades Marcadas
        </Text>

        <ScrollView
          horizontal
          style={{
            width: Dimensions.get('screen').width,
            marginHorizontal: -24,
            paddingHorizontal: 8,
          }}>
          <ScheduleActivity />
          <ScheduleActivity />
          <ScheduleActivity />
          <ScheduleActivity />
          <ScheduleActivity />
        </ScrollView>

        <Text preset="headingMedium" bold color="darkPurple" mt="s32">
          Notas Recentes
        </Text>

        <ScrollView>
          <NoteBox color="green" />
          <NoteBox color="lightBlue" />
          <NoteBox color="lightPurple" />
          <NoteBox color="lightPink" />
        </ScrollView>
      </Box>
    </Screen>
  );
}
