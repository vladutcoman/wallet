import React from 'react';

import FeatureWrapper from '@components/FeatureWrapper/FeatureWrapper';
import ConnectWalletForm from './ConnectWalletForm/ConnectWalletForm';

const ConnectWallet: React.FC = () => {
  return (
    <FeatureWrapper title="Welcome">
      <ConnectWalletForm />
    </FeatureWrapper>
  );
};

export default ConnectWallet;
