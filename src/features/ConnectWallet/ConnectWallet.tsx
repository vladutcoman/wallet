import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';

const ConnectWallet: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>ConnectWallet</Text>
      <Button
        // @ts-ignore
        onPress={() => navigation.navigate('Wallet')}
        title="Go to Wallet"
      />
    </>
  );
};

export default ConnectWallet;
