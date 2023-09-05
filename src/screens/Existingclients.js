import React,{useState} from "react";
import { Modal, View, Text } from "react-native";
import ClientForm from './ClientForm';
import {MaterialIcons} from '@expo/vector-icons'
//import SingleformView from "./SingleformView";


export default function Existingclients ({navigation, route}){
  const [modalShow, setModalShow] = useState(false);

  const [details, setDetails]= useState( [
     { clientName: 'Codetrain Africa', email:'cd@gmail.com', location:'EL',contact:'0244444444', id:'1'},
     { clientName: 'Bixmeuve Africa', email:'bd@gmail.com', location:'EL',contact:'0244444444', id:'2'},
     { clientName: 'World Games', email:'wg@gmail.com', location:'EL',contact:'0244444444', id:'3'},
])

const addNewClient = (form) =>{
  form.id = Math.random().toString();
  setDetails((existingDetails)=>{
    return[form, ...existingDetails]
  })
  setModalShow(false)
}
 
<View>
<Modal visible={modalShow}>
<MaterialIcons  name='close' size={24} 
onPress={()=>setModalShow(false)}/> 

<ClientForm addNewClient={addNewClient}/>

</Modal>

<MaterialIcons  name='add' size={24} 
onPress={()=>setModalShow(true)}/>
</View>

        return (
            <View >            

               <Text>{route.params.clientName}</Text>        
               <Text>{route.params.email}</Text>        
               <Text>{route.params.location}</Text>        
               <Text>{route.params.contact}</Text>        
            
          </View>
        );
      }


