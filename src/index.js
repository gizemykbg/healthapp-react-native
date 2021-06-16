import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Navigation from './navigation'


const App = () => {
  return (
   <SafeAreaView style={{flex:1}}>
       <Navigation/>
   </SafeAreaView>
  );
};

export default App;