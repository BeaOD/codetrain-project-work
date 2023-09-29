
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, TextInput, Image,TouchableOpacity, View } from 'react-native';

export default function Loginscreen({navigation}) {
  
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View>
        
        <Image source={require('../../assets/green.jpg')}
        style={styles.image}/>
      
    </View>

      <View> 
        <TextInput style={styles.input} placeholderTextColor='grey' placeholder='Email'/>
        <TextInput style={styles.input} placeholderTextColor='grey'
         placeholder='Password' secureTextEntry={true}/>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOG IN </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noAccountContainer}>
        
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <Text style={styles.signupText} onPress={() => {navigation.navigate('Signuphere')}}>Sign up </Text>
      
      </View>
      
      <View style={styles.noAccountContainer}>
      <Text style={styles.letSee}>Excited to have you back!</Text>
      </View>  
      <StatusBar style="auto" />
{/* 
//delete later */}
      <View style={styles.noAccountContainer}>
        <Text style={styles.signupText} onPress={() => {navigation.navigate('Landingscreen')}}>LandingScreen </Text>
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginTop:1,
  },
 
  image:{
    height: 250,
    width:'100%',
    marginBottom:40,
  },
  
  input:{
    borderBottomColor:'pink',
    borderBottomWidth: 2,
    marginBottom:30,
    fontSize:20,
    height:30,
    marginHorizontal:40,
  },
  forgotPassword:{
    color:'purple',
    alignSelf:'flex-end',
    marginVertical:3,
    marginRight:35,
  },
  buttonContainer:{
    backgroundColor:'pink',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:20,
    marginHorizontal:40,
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
    marginTop:20,
    
  }
});
