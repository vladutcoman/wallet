import { Text, VStack } from '@gluestack-ui/themed';
import React from 'react';

const AccountNotConnected = () => {
  return (
    <VStack
      h="$full"
      w="$full"
      space="sm"
      justifyContent="center"
      alignContent="center"
    >
      <Text textAlign="center">You are not connected to any account</Text>
      <Text textAlign="center">
        Please go to the wallet and import an account
      </Text>
    </VStack>
  );
};

export default AccountNotConnected;
