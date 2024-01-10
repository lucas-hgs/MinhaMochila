import React from 'react';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {theme} from './src/theme/theme';

import {HomeScreen} from './src/screens/app/HomeScreen/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NewNoteScreen} from './src/screens/app/NewNoteScreen/NewNoteScreen';

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
