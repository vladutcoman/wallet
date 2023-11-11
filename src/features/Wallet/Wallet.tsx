import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';

const Wallet: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>Wallet</Text>
      <Button
        // @ts-ignore
        onPress={() => navigation.navigate('SendTransaction')}
        title="Go to SendTransaction"
      />
    </>
  );
};

export default Wallet;
