import React from 'react';

import {ThemeProvider} from '@shopify/restyle/dist/context';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen} from './src/screens/app/HomeScreen/HomeScreen';
import {NewNoteScreen} from './src/screens/app/NewNoteScreen/NewNoteScreen';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <HomeScreen /> */}
        <NewNoteScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
