import React from 'react';
import { Link, LinkText } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

import FeatureWrapper from '@components/FeatureWrapper/FeatureWrapper';
import CustomButton from '@components/CustomButton/CustomButton';
import { EEXPLORER_LINK } from '@constants/index';
import { useTransactionStore } from '@store/transactionStore/transactionStore';
import TransactionConfirmationDetails from './TransactionConfirmationDetails/TransactionConfirmationDetails';
import TransactionConfirmationStatus from './TransactionConfirmationStatus/TransactionCOnfirmationStatus';

const TransactionConfirmation: React.FC = () => {
  const navigation = useNavigation();
  const { transactionStore } = useTransactionStore();
  const { transactionHash } = transactionStore;

  const handleOnPress = () => {
    // @ts-ignore
    navigation.navigate('Wallet');
  };

  return (
    <FeatureWrapper title="Welcome">
      <TransactionConfirmationStatus />
      <TransactionConfirmationDetails />
      <Link href={`${EEXPLORER_LINK}/${transactionHash}`}>
        <LinkText>View in explorer</LinkText>
      </Link>
      <CustomButton text="Back to Wallet" onPress={handleOnPress} />
    </FeatureWrapper>
  );
};

export default TransactionConfirmation;
