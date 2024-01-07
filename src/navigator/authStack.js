import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoginPage, SignUpPage } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator 
        initialRouteName='Log'
        screenOptions={{headerShown:false}}>
        
        <Stack.Screen
        name='Log'
        component={LoginPage}
        
        />

        <Stack.Screen

          name='Sign'
          component={SignUpPage}
          
        />
      </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})