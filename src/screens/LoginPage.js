
import { StyleSheet, 
    Text, 
    View,
    TextInput,
    Pressable,
    Image
  } from 'react-native';
  
  import react, {useState} from 'react';
  
  import Load from '../components/Load';
  
    const LoginPage = ({navigation}) => {
  
    const[welcome, setWelcome] = useState("")
    
    const[goodbye, setGoodbye] = useState("")
  
    const[result, setResult] = useState("")
  
    const [isLoading, setisLoading] = useState(false) // JS Boolean yapısı oluşturduk.(lambayı aç-kapa yaptıran anahtar gibi düşünebiliriz.)
      
    
    console.log(welcome)
    console.log(goodbye)
    console.log(isLoading)
    return (
      <View style={styles.container}>
        <Text style={styles.hi}>Hi bro {result} </Text>
        <Image
          source={require('../../assets/images/safe-box_2342944.png')}
          style={styles.image}/>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputBoxText}>Email</Text>

            <TextInput
              placeholder='enter ur email'
              style={styles.TextInputstyles}// örneğin klavyeden sadece numara girişi yapmak için 
              // keyboardType='numeric'
              onChangeText={setWelcome}
              value={welcome}
            /> 
        </View>
        
        <View style={styles.inputContainer}> 
          
          <Text style={styles.inputBoxText}>Password</Text>
            <TextInput 
              secureTextEntry={true} //password kısmını gizler 
              placeholder='enter ur password'
              style={styles.TextInputstyles}
              onChangeText={setGoodbye}
              value={goodbye}
            />
        </View>
        
        
        <Pressable
          onPress={()=>setisLoading(true)}
          style={({pressed}) => [{
            backgroundColor: pressed? 'lightblue' : 'blue'
  
          },styles.button]  }> 
  
          {/* birden fazla style yapısı için [] ile array oluşturduk */}
          {/*{({pressed}) => bu yapı orjinaldir  */}
          {/* pressed? 'lightblue' : 'gray' bu ise bize basınca açık mavi,normalde gri renkte anlamındadır */}
      
          <Text style={styles.buttontext}>Login</Text>
        
        </Pressable>

        <Pressable
          onPress={()=>
            
            navigation.navigate('Sign')}
          
          style={({pressed}) => [{
            backgroundColor: pressed? 'lightgray' : 'gray',
            marginTop:50,
          },styles.signupbutton]  }> 
  
          {/* birden fazla style yapısı için [] ile array oluşturduk */}
          {/*{({pressed}) => bu yapı orjinaldir  */}
          {/* pressed? 'lightblue' : 'gray' bu ise bize basınca açık mavi,normalde gri renkte anlamındadır */}
      
          <Text style={styles.buttontext}>Sign Up</Text>
        
        </Pressable>
        
          {isLoading ? <Load changeisLoading={setisLoading(false)}/> : null} 
          
  
      </View> //{isLoading ? <Load/> : null} Açıklama: HTML içine javascript kodu yerleştirmek için {} açıp içine yazarız.
    );
  }
  
  export default LoginPage ;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dark',
      alignItems: 'center',
      justifyContent: 'center',
    },  
    inputContainer:{
      width:'80%'
    }   ,

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
    button:{
      borderWidth:1,
      width:'80%',
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
    image:{
      width:100,
      height:100,
      marginBottom:20
    },
    hi:{
      fontWeight:'bold',
      fontSize:30,
      marginBottom:20
    },

    signupbutton:{
      borderWidth:1,
      width:'30%',
      height:50,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'


    },
    inputBoxText:{

      fontWeight:'bold',
      alignSelf:'flex-start',
    }
      
    
  });