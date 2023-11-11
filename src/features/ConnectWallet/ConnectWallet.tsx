import React from 'react';
import { Platform } from 'react-native';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';

import { ConnectWalletForm } from '@features/ConnectWallet/index';

const ConnectWallet: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
    >
      <ScrollView>
        <VStack
          py="$10"
          w="$full"
          space="4xl"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="$2xl" fontWeight="$bold">
            Welcome
          </Text>
          <ConnectWalletForm />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConnectWallet;
