import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ConnectWallet,
  SendTransaction,
  Wallet,
  TransactionConfirmation,
} from '@features/index';

const Stack = createNativeStackNavigator();

const WalletAppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionConfirmation">
        <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="SendTransaction" component={SendTransaction} />
        <Stack.Screen
          name="TransactionConfirmation"
          component={TransactionConfirmation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WalletAppNavigation;
