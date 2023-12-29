import React from 'react';
import {
  ScrollView,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {Box} from '../../../components/Box/Box';
import {HeaderProfile} from '../../../components/HeaderProfile/HeaderProfile';
import {NoteBox} from '../../../components/NoteBox/NoteBox';
import {ScheduleActivity} from '../../../components/ScheduleActivity/ScheduleActivity';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {activityListMock} from '../../../domain/Activities.ts/activityListMock';
import {Activity} from '../../../domain/Activities.ts/types';

export function HomeScreen() {
  function renderItem({item}: ListRenderItemInfo<Activity>) {
    return <ScheduleActivity activity={item} />;
  }

  return (
    <Screen>
      <HeaderProfile />

      <Box>
        <Text preset="headingMedium" bold color="darkPurple" mb="s8">
          Atividades Marcadas
        </Text>

        <FlatList
          data={activityListMock}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            width: Dimensions.get('screen').width,
            marginHorizontal: -24,
            paddingHorizontal: 8,
          }}
        />

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
