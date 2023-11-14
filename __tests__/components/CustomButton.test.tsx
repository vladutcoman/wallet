import React from 'react';
import { renderWithGSProvider } from '@utils/testUtils';
import { fireEvent } from '@testing-library/react-native';

import CustomButton from '@components/CustomButton/CustomButton';

const onPressMock = jest.fn();

describe('CustomButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('renders correctly with enabled state', () => {
    const { getByText, getByRole } = renderWithGSProvider(
      <CustomButton text="Press me" onPress={onPressMock} />,
    );

    const textElement = getByText('Press me');
    const button = getByRole('button');

    expect(textElement).toBeDefined();
    expect(button.props.states).toHaveProperty('disabled', undefined);
  });

  it('renders correctly with disabled state', () => {
    const { getByRole, getByText } = renderWithGSProvider(
      <CustomButton text="Press me" onPress={onPressMock} isDisabled />,
    );

    const textElement = getByText('Press me');
    const button = getByRole('button');

    expect(textElement).toBeDefined();
    expect(button.props.states).toHaveProperty('disabled', true);
  });

  it('calls onPress function when button is pressed', () => {
    const { getByRole } = renderWithGSProvider(
      <CustomButton text="Press me" onPress={onPressMock} />,
    );

    const button = getByRole('button');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
