import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from './src/screens/LoginPage'
import SignUpPage from './src/screens/SignUpPage'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        
        <Stack.Screen
        name='Log'
        component={LoginPage}
        
        />

        <Stack.Screen

          name='Sign'
          component={SignUpPage}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})//bu gerekli değil,biz app.js importlama ve navigatörler için kullanıcaz.
