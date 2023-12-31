import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '@components/CustomButton/CustomButton';
import FeatureWrapper from '@components/FeatureWrapper/FeatureWrapper';
import RowDataView from '@components/RowDataView/RowDataView';
import { useWalletStore } from '@store/walletStore/walletStore';
import { formatBalance } from '@utils/utils';
import TransactionsList from './TransactionsList/TransactionsList';

const Wallet: React.FC = () => {
  const navigation = useNavigation();
  const { walletStore } = useWalletStore();
  const { address, balance } = walletStore;

  return (
    <FeatureWrapper title="Welcome">
      <RowDataView label="Addres" value={address} />
      <RowDataView label="Balance" value={formatBalance(balance)} />
      <CustomButton
        text="Send Transaction"
        // @ts-ignore
        onPress={() => navigation.navigate('SendTransaction')}
      />
      <TransactionsList />
    </FeatureWrapper>
  );
};

export default Wallet;
