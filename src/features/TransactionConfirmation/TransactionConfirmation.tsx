import CustomButton from '@components/CustomButton/CustomButton';
import FeatureWrapper from '@components/FeatureWrapper/FeatureWrapper';
import { EEXPLORER_LINK } from '@constants/index';
import { Link, LinkText } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import TransactionConfirmationDetails from './TransactionConfirmationDetails/TransactionConfirmationDetails';
import TransactionConfirmationStatus from './TransactionConfirmationStatus/TransactionCOnfirmationStatus';

const TransactionConfirmation: React.FC = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    console.log('handleOnPress');
    // @ts-ignore
    navigation.navigate('Wallet');
  };

  return (
    <FeatureWrapper title="Welcome">
      <TransactionConfirmationStatus />
      <TransactionConfirmationDetails />
      <Link href={EEXPLORER_LINK}>
        <LinkText>View in epxlorer</LinkText>
      </Link>
      <CustomButton text="Back to Wallet" onPress={handleOnPress} />
    </FeatureWrapper>
  );
};

export default TransactionConfirmation;
