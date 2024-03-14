import React from 'react';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-reanimated', () => 'Animated');

import {ThemeProvider} from '@shopify/restyle';
import {render} from '@testing-library/react-native';

import {theme} from '@theme';

import {Button} from '../Button';

describe('<Button />', () => {
  test('the component rendered', () => {
    const {debug} = render(
      <ThemeProvider theme={theme}>
        <Button title="button title" />
      </ThemeProvider>,
    );

    debug();
  });
});
