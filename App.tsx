import React from 'react';

import {
  ActivitiesProvider,
  NotesProvider,
  asyncStorage,
  initializeStorage,
} from '@services';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';

import {theme} from './src/theme/theme';

initializeStorage(asyncStorage);

function App(): JSX.Element {
  return (
    <ActivitiesProvider>
      <NotesProvider>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Router />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </NotesProvider>
    </ActivitiesProvider>
  );
}

export default App;
