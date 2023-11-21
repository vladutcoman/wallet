import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConnectWallet from '@features/Account/ConnectWallet/ConnectWallet';
import Wallet from '@features/Account/Wallet/Wallet';
import SendTransaction from '@features/Account/SendTransaction/SendTransaction';
import TransactionConfirmation from '@features/Account/TransactionConfirmation/TransactionConfirmation';

const Stack = createNativeStackNavigator();

const AccountStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ConnectWallet">
      <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="SendTransaction" component={SendTransaction} />
      <Stack.Screen
        name="TransactionConfirmation"
        component={TransactionConfirmation}
      />
    </Stack.Navigator>
  );
};

export default AccountStackNavigation;
