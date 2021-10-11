import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../styles';
//screens
import AddWater from '../screens/addCharts/AddWater';
import AddSleep from '../screens/addCharts/AddSleep';
import AddNutrition from '../screens/addCharts/AddNutrition';
import AddExercise from '../screens/addCharts/AddExercise';
import AddTest from '../screens/addCharts/AddTest';
import AddSpor from '../screens/addCharts/AddSpor';

const ChartStack = createStackNavigator();

function ChartStackNavigation() {
  return (
    <ChartStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
        headerTitleStyle: {
          color: colors.dark,
          fontSize: 20,
          fontWeight: '500',
        },
        headerTransparent: true,
        headerBackTitle: 'Geri',
      }}>
      <ChartStack.Screen
        name="AddWater"
        component={AddWater}
        options={{headerTitle: 'Su Takibi'}}
      />
      <ChartStack.Screen
        name="AddSleep"
        component={AddSleep}
        options={{headerTitle: 'Uyku Takibi'}}
      />
      <ChartStack.Screen
        name="AddNutrition"
        component={AddNutrition}
        options={{headerTitle: 'Beslenme Düzeni'}}
      />
      <ChartStack.Screen
        name="AddExercise"
        component={AddExercise}
        options={{headerTitle: 'Egzersiz Takibi'}}
      />
      <ChartStack.Screen
        name="AddTest"
        component={AddTest}
        options={{headerTitle: 'Test Sonuçları'}}
      />
      <ChartStack.Screen
        name="AddSpor"
        component={AddSpor}
        options={{headerTitle: 'Spor'}}
      />
    </ChartStack.Navigator>
  );
}
export default ChartStackNavigation;
