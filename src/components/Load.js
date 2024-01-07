import { StyleSheet, Text, View,ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Load = (props) => {
  return (
    <View style={styles.container}>
      
      <Pressable 
      onPress={()=> props.changeisLoading()}
          style={[{},styles.closeButtonContainer]}>        
          <Text style={styles.closeButton}>X</Text>
      </Pressable>
      
      <ActivityIndicator 
      size={'large'} 
      color={'blue'}/>
      <Text style={styles.loadtext}>loading...</Text>
    </View>
  )
}

export default Load

const styles = StyleSheet.create({
    container:{
        position:'absolute',    
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'tomato'
    },
    loadtext:{
      fontWeight:'bold',
      fontSize:16,
      color:'white', 
      marginTop:20 //loading yazısı ile loading animasyonu arasında boşluk bırakır.
    },
    closeButtonContainer:{
      backgroundColor:'black',
      width:50,
      height:50,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      top:40,
      right:30




    },
    closeButton:{
      color:'white',
      fontWeight:'bold',
      fontSize:16,
      


    }

})