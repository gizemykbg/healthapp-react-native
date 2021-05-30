import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStackNavigation from './AuthStackNavigation';
import MainStackNavigation from './MainStackNavigation'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main" headerMode="none">
            <Stack.Screen name="Auth" component={AuthStackNavigation} />
            <Stack.Screen name="Main" component={MainStackNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};
export default Navigation;