import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authStack';
import UserStack from './userStack';
const Rootnavigation = () => {
  
        const isAuth = false
  
  
    return (
    <NavigationContainer>
        
        {
            !isAuth//yani isAuth false ise biz false olarak başlattığımız için boolean yapısını bu şekilde kullandık.
                ?<AuthStack/>//buradaki '?' isAult false mu sorusuna cevap evet ise demektir.
                :<UserStack/>//':' ile de cevap hayır ise demektir.
        }

    </NavigationContainer>
  )
}

export default Rootnavigation

const styles = StyleSheet.create({})