import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {Button, ButtonProps} from '../Button';

function renderComponent(props: Partial<ButtonProps>) {
  render(<Button title="button title" {...props} />);

  const titleElement = screen.getByText('button title', {exact: false});

  return {
    titleElement,
  };
}

describe('<Button />', () => {
  it('calls the onPress function when the user press the button', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({onPress: mockedOnPress});

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('does not call onPress function when it is disabled and it is pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });
});
