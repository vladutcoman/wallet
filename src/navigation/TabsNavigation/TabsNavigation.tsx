import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountStackNavigation from '../AccountStackNavigatiom/WalletAppNavigation';
import Dapp from '@features/DApp/Dapp';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Account" component={AccountStackNavigation} />
        <Tab.Screen name="Dapp" component={Dapp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsNavigation;
