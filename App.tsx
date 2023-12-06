import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">Test</Text>
        <Button title="Test" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
