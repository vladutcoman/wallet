import FeatureWrapper from '@components/FeatureWrapper/FeatureWrapper';
import React from 'react';
import SendTransactionForm from './SendTransactionForm/SendTransactionForm';

const SendTransaction: React.FC = () => {
  // const navigation = useNavigation();

  return (
    <FeatureWrapper title="Send">
      <SendTransactionForm />
    </FeatureWrapper>
  );
};

export default SendTransaction;
