import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';

import { ConnectWalletInputArea } from '@features/ConnectWallet/index';

const ConnectWallet: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}>
      <ScrollView>
        <VStack
          py="$10"
          w="$full"
          space="4xl"
          alignItems="center"
          justifyContent="center">
          <Text fontSize="$2xl" fontWeight="$bold">
            Welcome
          </Text>
          <ConnectWalletInputArea />
          <Button
            // @ts-ignore
            onPress={() => navigation.navigate('Wallet')}>
            <Text color="$white">Import Wallet</Text>
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConnectWallet;
