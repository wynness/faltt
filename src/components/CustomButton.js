import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({buttontext,setWidth,handleOnPress}) => {
  return (
    <Pressable
          onPress={()=>handleOnPress()}
          style={({pressed}) => [{
            backgroundColor: pressed? 'lightblue' : 'blue',
            width: setWidth,
  
          },styles.button]  }> 
  
          {/* birden fazla style yapısı için [] ile array oluşturduk */}
          {/*{({pressed}) => bu yapı orjinaldir  */}
          {/* pressed? 'lightblue' : 'gray' bu ise bize basınca açık mavi,normalde gri renkte anlamındadır */}
      
          <Text style={styles.buttontext}>{buttontext}</Text>
        
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({



    button:{
        borderWidth:1,
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
      },
      buttontext:{
        fontWeight:'bold',
        color:'white'
    
      },
})