import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';

const SendTransaction: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text>SendTransaction</Text>
      <Button
        // @ts-ignore
        onPress={() => navigation.navigate('TransactionConfirmation')}
        title="Go to TransactionConfimarion"
      />
    </>
  );
};

export default SendTransaction;
