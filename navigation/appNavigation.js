import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddCasaScreen from '../screens/AddCasaScreen';
import AddExpanseScreen from '../screens/AddExpanseScreen';
import CasaExpensesScreen from '../screens/CasaExpensesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown:false}} name="AddCasa" component={AddCasaScreen} />
      <Stack.Screen options={{headerShown:false}} name="AddExpanseScreen" component={AddExpanseScreen} />
      <Stack.Screen options={{headerShown:false}} name="CasaExpenses" component={CasaExpensesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
