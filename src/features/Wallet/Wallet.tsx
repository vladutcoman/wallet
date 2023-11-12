import CustomButton from '@components/CustomButton/CustomButton';
import FeatureWrapper from '@components/FeatureWrapper/FeatureWrapper';
import RowDataView from '@components/RowDataView/RowDataView';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import TransactionsList from './TransactionsList/TransactionsList';
import { useWalletStore } from '@store/walletStore/walletStore';

const Wallet: React.FC = () => {
  const navigation = useNavigation();
  const { walletStore } = useWalletStore();
  const { address, balance } = walletStore;

  // TODO: format balance
  const formattedBalance = `${balance} XeGLD`;

  return (
    <FeatureWrapper title="Welcome">
      <RowDataView label="Addres" value={address} />
      <RowDataView label="Balance" value={formattedBalance} />
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
