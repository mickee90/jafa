import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonComponent } from '../ButtonComponent';

describe('ButtonComponent', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <ButtonComponent
        label="Test Button"
        onPress={() => {
          console.log('test');
        }}
      />
    );
    const button = getByText('Test Button');
    expect(button).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonComponent label="Press Me" onPress={onPressMock} />
    );
    const button = getByText('Press Me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders with different modes', () => {
    const modes = [
      'text',
      'contained',
      'outlined',
      'elevated',
      'contained-tonal',
    ] as const;
    modes.forEach((mode) => {
      const { getByText } = render(
        <ButtonComponent
          label={`${mode} Button`}
          onPress={() => {
            console.log('test');
          }}
          mode={mode}
        />
      );
      const button = getByText(`${mode} Button`);
      expect(button).toBeTruthy();
    });
  });

  it('applies custom styles to the container', () => {
    const { getByTestId } = render(
      <ButtonComponent
        label="Styled Button"
        onPress={() => {
          console.log('test');
        }}
        containerStyle={{ marginTop: 10 }}
        testID="button-container"
      />
    );
    const container = getByTestId('button-container');
    expect(container).toHaveStyle({ marginTop: 10, paddingBottom: 8 });
  });
});
