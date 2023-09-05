import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default  class Addnew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details:{
        clientName: '',
        email:'',
        location:'',
        contact:'',
        id:''
    }}
}
static navigationOptions = {
  title:'Add'
}
// handleSubmit =()=>{
//     //sets everything back to empty values at the input field
//   this.setState(
//       {
//         clientName: '',
//         email:'',
//         location:'',
//         contact:'',
//         id:''
//       }
//   )
//   console.log(this.state)
// }


    render() {
       const { navigate} = this.props.navigation;
    
  return (
    <SafeAreaView style={styles.container} showsVerticalScrollIndicator={false}>
     
      <View style={styles.loginTextContainer}> 
      <Text style={styles.loginText}>Add New Client</Text>
      </View>

      <View> 
        <TextInput style={styles.input} placeholderTextColor='grey' placeholder='Name of Client'
        value={this.state.clientName} 
        onChangeText={(clientName)=>this.setState({clientName})}  />
        
       
         <TextInput style={styles.input} placeholderTextColor='grey' placeholder='Email'
         value={this.state.email} 
         onChangeText={(email)=>this.setState({email})}/>


        <TextInput style={styles.input} placeholderTextColor='grey'
         placeholder='Contact'
         value={this.state.contact} 
         onChangeText={(contact)=>this.setState({contact}) }/>

         <TextInput style={styles.input} placeholderTextColor='grey'
         placeholder='Location'
         value={this.state.location} 
         onChangeText={(location)=>this.setState({location})} />


         <TouchableOpacity style={styles.buttonContainer}
         onPress={this.props.navigation.navigate('Existingclients',{details:this.state.details, otherParam:'id'}
         )}><Text>Add New Client</Text></TouchableOpacity>

         {/* <TextInput style={styles.input} placeholderTextColor='grey'
          placeholder='Attach documents' /> 
        

        <FlatList
        data={this.state.clientName}
        renderItem={({item})=>{return <Text key={item.id}>{item}</Text>}}
        keyExtractor={(item)=>{item.id}}
        />  */}
        
      
       

         
      </View>

    
     

      
      
      <View style={styles.noAccountContainer}>
      <Text style={styles.letSee}>We have been waiting for you!</Text>
      </View>  
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:50,
    marginTop:100,
  },
  loginText:{
    color:'#34aeeb',
    fontSize:35,
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
