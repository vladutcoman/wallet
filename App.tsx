import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { TabsNavigation } from '@navigation/index';
import { DappProvider } from '@multiversx/sdk-dapp/wrappers';

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      {/* <DappProvider environment="testnet"> */}
      <TabsNavigation />
      {/* </DappProvider> */}
    </GluestackUIProvider>
  );
}

export default App;
