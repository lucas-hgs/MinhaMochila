import React from 'react';

import {ThemeProvider} from '@shopify/restyle/dist/context';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen, NewNoteScreen, NewActivityScreen} from '@screens';

import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <HomeScreen /> */}
        {/* <NewNoteScreen /> */}
        <NewActivityScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
