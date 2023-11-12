import React from 'react';

import { ConnectWalletForm } from '@features/ConnectWallet/index';
import FeatureWrapper from '@components/FeatureWrapper/FeatureWrapper';

const ConnectWallet: React.FC = () => {
  return (
    <FeatureWrapper title="Welcome">
      <ConnectWalletForm />
    </FeatureWrapper>
  );
};

export default ConnectWallet;
