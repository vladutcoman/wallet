import { useWalletStore } from '@store/walletStore/walletStore';
import React from 'react';
import DappWebviewWrapper from './DappWebviewWrapper/DappWebviewWrapper';
import AccountNotConnected from './AccountNotConnected/AccountNotConnected';
import { observer } from 'mobx-react-lite';

const Dapp = () => {
  const { walletStore } = useWalletStore();
  const { secretKey } = walletStore;

  return secretKey ? <DappWebviewWrapper /> : <AccountNotConnected />;
};

export default observer(Dapp);
