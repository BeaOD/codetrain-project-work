import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Modal, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, View , FlatList} from 'react-native';
 import ClientForm from './ClientForm';
// import {MaterialIcons} from '@expo/vector-icons'


export default  function Addnew  ({navigation}){
// const [modalShow, setModalShow] = useState(false);

const [details, setDetails]= useState( [
      //  { clientName: 'Codetrain Africa', email:'cd@gmail.com', location:'EL',contact:'0244444444', id:'1'},
      //  { clientName: 'Bixmeuve Africa', email:'bd@gmail.com', location:'EL',contact:'0244444444', id:'2'},
      //  { clientName: 'World Games', email:'wg@gmail.com', location:'EL',contact:'0244444444', id:'3'},
])

// const addNewClient = (form) =>{
//   form.id = Math.random().toString();
//   setDetails((existingDetails)=>{
//     return[form, ...existingDetails]
//   })
//   setModalShow(false)
// }

    
  return (
    <SafeAreaView style={styles.container} showsVerticalScrollIndicator={false}>     
      <View style={styles.loginTextContainer}> 
      <Text style={styles.loginText}>Add New Client</Text>

      <ClientForm/>
      </View>

      {/* <View>
        <Modal visible={modalShow}>
        <MaterialIcons  name='close' size={24} 
        onPress={()=>setModalShow(false)}/> 
        
        <ClientForm addNewClient={addNewClient}/>

        </Modal>

        <MaterialIcons  name='add' size={24} 
        onPress={()=>setModalShow(true)}/>
      </View> */}

      <View> 
        <FlatList
        data={details}
        keyExtractor={(item, index)=>item.id}
        renderItem={({item})=> (
        <TouchableOpacity style={styles.buttonContainer}
         onPress={()=>navigation.navigate('Existingclients',item)}>
         <Text >{item.clientName}</Text>
         </TouchableOpacity>

   ) }
        />         
      </View>

    
     

      
      
      <View style={styles.noAccountContainer}>
      <Text style={styles.letSee}>We have been waiting for you!</Text>
      </View>  
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:50,
    marginTop:30,
  },
  loginText:{
    color:'#34aeeb',
    fontSize:35,
  },
  loginTextContainer:{
    marginBottom:10,
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
    marginVertical:10,
    color:'white',
    fontSize:20,
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
