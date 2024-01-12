import { StyleSheet, Text, View, SafeAreaView,Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import {CustomTextInput,CustomButton} from '../components'
// import { useNavigation } from '@react-navigation/native'



const SignUpPage = ({navigation}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  
  return (
    
    
      <SafeAreaView style={styles.container}>  

        {/* <View style={styles.container}> */}
          
          <View style={styles.TextUp}>
            <Image style={styles.image} source={require('../../assets/images/agreement.png')}/>
            <Text style={styles.SignUp}>SignUpPage</Text>
          
          </View>


          
          <View style={styles.CustomTContainer}>
          
              <CustomTextInput
                
                title='Name'
                isSecureText={false}
                handleOnChangeText={setName}  
                handleValue={name}  
                handlePlaceHolder='enter ur name'
                />   
                
              <CustomTextInput
                title='Email'
                isSecureText={false}
                handleOnChangeText={setEmail}  
                handleValue={email}  
                handlePlaceHolder='enter ur Email'
                />
              
              <CustomTextInput
                title='Password'
                isSecureText={true}
                handleOnChangeText={setPassword}  
                handleValue={password}  
                handlePlaceHolder='create ur password'
                />
          </View>
          <View style={styles.ButtonOptions}>

            <CustomButton
              buttontext='Sign Up'
              setWidth="80%"
              buttonColor="blue"
              pressedButtonColor="lightgray"
              handleOnPress={()=>console.log(name," ",email," ",password )}
            
            />


            <Pressable onPress={()=>navigation.navigate("Log")}>

              <Text style={{fontWeight:'bold'}}>Already have account? Login</Text>

            </Pressable>



          </View>


          
          
        {/* </View> */}
      </SafeAreaView>


  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container:{
    flex: 1,  
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems: 'center',

    

  },

  //ekranı 6 ya bölüp işlem yapacağız.
  //bunun için flex yapısı yapıcaağız.
  //yukarı ana containerın flex i ile çatışmayacaktır. 
  
  
  
  
  SignUp:{
    fontWeight:'bold',
    fontSize:30,
    marginBottom:30,
    color:'white'
    
    
  },
  TextUp:{
  flex:1.7,
  // borderWidth:1,
  width:'100%', 
  alignItems:'center',
  justifyContent:'center',
  paddingTop:50

    
  
  
  
  },


  CustomTContainer:{
    flex:1.7,
    // borderWidth:1,

    // paddingVertical:100, // belirlenen flex ile borderwidht ile net görülür. üst barından içe doğru boşluk verir. 
    width:'100%',
    alignItems:'center',
    justifyContent:'space-between' //text boxların arasına boşluk koyar.





  },
  ButtonOptions:{
    // borderWidth:1,
    width:'100%',
    flex:2.5,
    alignItems:'center',
    // justifyContent:'space-around'
    // justifyContent:'space-evenly'
    justifyContent:'space-between',
    paddingTop:70



  },
  image:{
    
    width:100,
    height:100,
    marginBottom:20,
    alignItems:'center',
    

  },

})