//first page after logging in

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, Image, TouchableOpacity, View } from 'react-native';

export default function Landingscreen({navigation}) {
 
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        <View>
        
          <Image source={require('../../assets/artem-beliaikin-_FyZbe4UviU-unsplash.jpg')}
          style={styles.image}/>
        
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => {navigation.navigate('OneFlower')}} 
          >Flower  </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}
           onPress={() => {navigation.navigate('FlowerList')}}>Flower List </Text>
        </TouchableOpacity>
      </View>  
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}
           onPress={() => {navigation.navigate('MemberProfile')}}>Member Profile </Text>
        </TouchableOpacity>
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
 
  buttonContainer:{
    backgroundColor:'#34aeeb',
    height: 50,
    width:250,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:50,
    marginHorizontal:50,
    marginBottom:10,
    marginTop:0,
    flex:4
    
  },
  buttonText:{
    color:'white',
    fontSize:25,
  },
  image:{
    height: 250,
    width:'100%',
    marginBottom:80,
  },
  bottomContainer:{
    backgroundColor:'#0f3822',
    height: 50,
    width:'100%',
    flex:1,
    alignItems:'baseline'

  }
  
});
