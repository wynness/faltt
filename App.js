import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from './src/screens/LoginPage'
import SignUpPage from './src/screens/SignUpPage'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rootnavigation from './src/navigator/rootnavigation';
const Stack = createNativeStackNavigator();

const App = () => {
  return <Rootnavigation/>
}

export default App

const styles = StyleSheet.create({})//bu gerekli değil,biz app.js importlama ve navigatörler için kullanıcaz.
