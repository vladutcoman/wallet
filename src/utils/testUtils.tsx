import React from 'react';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { render, RenderResult } from '@testing-library/react-native';

export const renderWithGSProvider = (children: JSX.Element): RenderResult => {
  return render(
    <GluestackUIProvider config={config}>{children}</GluestackUIProvider>,
  );
};
