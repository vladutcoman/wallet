import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';

const TransactionConfirmation: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>TrasactionConfirmation</Text>
      <Button
        // @ts-ignore
        onPress={() => navigation.navigate('ConnectWallet')}
        title="Go to ConnectWallet"
      />
    </>
  );
};

export default TransactionConfirmation;
