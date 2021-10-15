import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//screens
import TabNavigation from './TabNavigation';
import ChartStackNavigation from './ChartStackNavigation';
import AuthStackNavigation from './AuthStackNavigation';
const MainStack = createStackNavigator();

function MainStackNavigation() {
  return (
    <MainStack.Navigator mode="modal">
      <MainStack.Screen
        name="Auts"
        component={AuthStackNavigation}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Charts"
        component={ChartStackNavigation}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}
export default MainStackNavigation;
