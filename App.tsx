import React from 'react';

import {asyncStorage, initializeStorage} from '@services';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NotesProvider} from 'src/services/notes/Providers/NotesProvider';

import {Toast} from '@components';
import {Router} from '@routes';

import {theme} from './src/theme/theme';

initializeStorage(asyncStorage);

function App(): JSX.Element {
  return (
    <NotesProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <Toast />
        </ThemeProvider>
      </SafeAreaProvider>
    </NotesProvider>
  );
}

export default App;
