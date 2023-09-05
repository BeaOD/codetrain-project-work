import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Signupscreen({navigation}) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.loginTextContainer}> 
      <Text style={styles.loginText}>Sign Up</Text>
      </View>

      <View> 
        <TextInput style={styles.input} placeholderTextColor='grey' placeholder='Business Name'/>
        <TextInput style={styles.input} placeholderTextColor='grey' placeholder='Email'/>
        <TextInput style={styles.input} placeholderTextColor='grey'
         placeholder='Password' secureTextEntry={true}/>
         <TextInput style={styles.input} placeholderTextColor='grey'
         placeholder='Confirm Password' secureTextEntry={true}/>
        
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continue </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noAccountContainer}>
        
          <Text style={styles.noAccountText}>Already have an account? </Text>
          <Text style={styles.signupText} onPress={() => {navigation.navigate('Loginhere')}}>Login</Text>
      
      </View>
      
      <View style={styles.noAccountContainer}>
      <Text style={styles.letSee}>We have been waiting for you!</Text>
      </View>  
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:50,
    marginTop:100,
  },
  loginText:{
    color:'#34aeeb',
    fontSize:50,
  },
  loginTextContainer:{
    marginBottom:30,
  },
  input:{
    borderBottomColor:'#34aeeb',
    borderBottomWidth: 2,
    marginBottom:30,
    fontSize:20,
    height:30,
  },
  
  buttonContainer:{
    backgroundColor:'#34aeeb',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:50,
  },
  buttonText:{
    color:'white',
    fontSize:25,
  },
  noAccountContainer:{
    flexDirection:'row',
    justifyContent:'center',
  },
  noAccountText:{
    marginRight:10,
    fontSize:16,
  },

  signupText:{
    fontSize:16,
    color:'purple',
  },

  letSee:{
    marginTop:40,
    
  }
});
