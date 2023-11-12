import CustomButton from '@components/CustomButton/CustomButton';
import FeatureWrapper from '@components/FeatureWrapper/FeatureWrapper';
import RowDataView from '@components/RowDataView/RowDataView';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import TransactionsList from './TransactionsList/TransactionsList';

const Wallet: React.FC = () => {
  const navigation = useNavigation();
  const address =
    'erd1q9xj4uqrfy9ge6n7lefn24qfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34';
  const balance = '22.5 XeGLD';

  return (
    <FeatureWrapper title="Welcome">
      <RowDataView label="Addres" value={address} />
      <RowDataView label="Balance" value={balance} />
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
