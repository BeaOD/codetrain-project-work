//first page after logging in

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, Image, TouchableOpacity, View } from 'react-native';


export default function Home({navigation}) {
  

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        <View>
        
          <Image source={require('../../assets/steven-kuppers-sW9Z1u9TYDo-unsplash.jpg')}
          style={styles.image}/>
        
      </View>
      <View  style={styles.opening}>
        <Text> ABI YOU KNOW DADA, WE HAVE RELEASED THE LATEST VERSION</Text>
        <Text> Keep doing what you love</Text>
      </View>

      <View style={styles.line} >
        
          <Text style={styles.registerText} onPress={() => {navigation.navigate('Loginhere')}} 
          >REGISTER  </Text>
        
      
        
          <Text style={styles.position1}
           onPress={() => {navigation.navigate('Signuphere')}}>SIGN IN </Text>
  
      </View>  

     
        
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f0f0f0',
    flex:1
    
  },

  opening:{
    
    marginHorizontal:400,
    marginTop:15
  },
  line:{
    flexDirection:'row',
    marginTop:100,
    marginHorizontal:100,
  },
  position1:{
    color:'black',
    fontSize:15,
   marginLeft:600,
   fontWeight:'bold'
  },
 
  
  registerText:{
    color:'black',
    fontSize:15,
    marginLeft:200,
    fontWeight:'bold'
   
  },
  image:{
    height: 250,
    width:'100%',
    marginBottom:10,
  },
  
  
});
