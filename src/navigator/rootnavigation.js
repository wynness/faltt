import { StyleSheet } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './authStack';
import UserStack from './userStack';
import { useSelector } from 'react-redux';
import app from '../../firebaseConfig';

const rootnavigation = () => {

        const {isAuth} = useSelector((state)=>state.user)
        //isAuth userSlice.js içinde false durumundadır.setload kısmındaki if-else yapısına göre değişiklik gösterecektir.
        // const isAuth = false //yukarıdaki kod satırını aktif hale getirdik.
  
  
    return (
        <NavigationContainer>
            {!isAuth 
                ?<AuthStack/>
                :<UserStack/>
            }
        </NavigationContainer>
    )
}

export default rootnavigation


const styles = StyleSheet.create({})