//first page after logging in

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, Image, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Addnew from './Addnew';
import Existingclients from './Existingclients'

export default function Landingscreen({navigation}) {
  const [allthedata, setAllthedata] = useState([
        {clientName:'Codetrain Africa',
         id:'1'}
    
      ])
    
      addNewform =(form) =>{
        form.id = Math.random().toString()
        allthedata ={form,id}
         setAllthedata(
          [...allthedata, form]
        )
    }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        <View>
        
          <Image source={require('../../assets/green.jpg')}
          style={styles.image}/>
        
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => {navigation.navigate('Addnew')}} 
          addNewform={addNewform}>Add New Client  </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}
           onPress={() => {navigation.navigate('Existingclients')}}>Existing Client </Text>
        </TouchableOpacity>
      </View>  

      <View style={styles.bottomContainer}> 
             
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
