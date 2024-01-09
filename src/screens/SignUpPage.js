import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CustomTextInput} from '../components'
const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <Text>SignUpPage</Text>
      <CustomTextInput/>   
    </View>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container:{
    backgroundColor:'tomato',
    flex: 1,  
    justifyContent:'center',
    alignItems: 'center',

  }

})