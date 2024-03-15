import React from 'react';

import {render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  test('the component rendered', () => {
    const {debug} = render(<Button title="button title" />);

    debug();
  });
});
