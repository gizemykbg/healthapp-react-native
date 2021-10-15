import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//screens
import Entrance from '../screens/auth/Entrance';
import Login from '../screens/auth/login/Login';
import ForgotPassword from '../screens/auth/login/ForgotPassword';
import Register from '../screens/auth/register/Register';
//import RegisterPersonelInfo from '../screens/auth/register/RegisterPersonelInfo';
const MainStack = createStackNavigator();

function MainStackNavigation() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Entrance" component={Entrance} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <MainStack.Screen name="Register" component={Register} />
      {/*  <MainStack.Screen
        name="RegisterPersonelInfo"
        component={RegisterPersonelInfo}
      /> */}
    </MainStack.Navigator>
  );
}
export default MainStackNavigation;
