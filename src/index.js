import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Navigation from './navigation'
/* 
import GoogleFit, { Scopes } from 'react-native-google-fit'

GoogleFit.checkIsAuthorized().then(() => {
    console.log(GoogleFit.isAuthorized) // Then you can simply refer to `GoogleFit.isAuthorized` boolean.
}) */

const App = () => {
  return (
   <SafeAreaView style={{flex:1}}>
       <Navigation/>
   </SafeAreaView>
  );
};

export default App;