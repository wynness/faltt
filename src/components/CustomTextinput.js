import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'

const CustomTextInput = ({title,isSecureText,handleOnChangeText,handleValue,handlePlaceHolder}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>

        <TextInput
          // inputMode='email'
          secureTextEntry={isSecureText}//pratik için koyduk.
          placeholder={handlePlaceHolder}
          style={styles.TextInputstyles}// örneğin klavyeden sadece numara girişi yapmak için 
          // keyboardType='numeric'
          // onChangeText={setWelcome}
          // value={welcome}
        /> 
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer:{
        width:'80%'
      }   ,

      inputBoxText:{

        fontWeight:'bold',
        alignSelf:'flex-start',
      },
      TextInputstyles:{
        borderBottomWidth:0.5,
        width:'100%',
        height:50,
        borderRadius:10,
        marginVertical:10,//barın altında ve üstünde boşluk bırakır
        textAlign:'center',
        color:'blue',
        fontWeight:'bold'
      },
})