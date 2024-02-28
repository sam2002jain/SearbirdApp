import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'; // Import your login component
import ForgetPassword from './screens/ForgetPassword'; // Import your forget component
import ChangePassword from './screens/Changepass';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
        <Stack.Screen name = "ChangePassword" component={ChangePassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
