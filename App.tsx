import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { WalletAppNavigation } from '@navigation/index';

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <WalletAppNavigation />
    </GluestackUIProvider>
  );
}

export default App;
