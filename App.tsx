import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

import {TextInput} from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView />

      <Box padding="s24" gap="s16">
        <TextInput label="Adicione um título" errorMessage="Há um erro" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
