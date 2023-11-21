import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { TabsNavigation } from '@navigation/index';

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <TabsNavigation />
    </GluestackUIProvider>
  );
}

export default App;
