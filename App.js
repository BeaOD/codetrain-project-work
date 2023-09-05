// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useState } from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Existingclients from './src/screens/Existingclients'
// import Landingscreen from "./src/screens/Landingscreen";
// import Signupscreen from './src/screens/Signuphere'
// import Loginscreen from './src/screens/Loginhere'
// import Addnew from './src/screens/Addnew'



// const Stack = createStackNavigator()

// export default App () {
//   const [allthedata , setAllthedata] = useState(
     
//             allthedata=[
//                 {
//                     clientName: '',                  
//                 },
//             ])
        
    
//         // addNewform =(form) =>{
//         //     form.id = Math.random().toString()
//         //     this.setState({
//         //         allthedata:[...this.state.allthedata, form]
//         //     })
//         // }

//   return (
  
//     <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Loginhere"  component={Loginscreen}/>
//                 <Stack.Screen name="Signuphere"  component={Signupscreen}/>
//                 <Stack.Screen name="Landingscreen"  component={Landingscreen}/>
//                 <Stack.Screen name="Addnew"  component={Addnew}/>
//                 <Stack.Screen name="Existingclients"  component={Existingclients}/>

                
//             </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





import React from 'react'
import { useState } from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Existingclients from './src/screens/Existingclients'
import Landingscreen from "./src/screens/Landingscreen";
import Signupscreen from './src/screens/Signuphere'
import Loginscreen from './src/screens/Loginhere'
import Addnew from './src/screens/Addnew'


const Stack = createStackNavigator()
// export default function App(props) {
//   const [allthedata, setAllthedata] = useState([
//     {clientName:'Codetrain Africa',
//      id:'1'}

//   ])

//   addNewform =(form) =>{
//     form.id = Math.random().toString()
//     allthedata ={form,id}
//      setAllthedata(
//       [...allthedata, form]
//     )
// }
export default class App extends React.Component {
  // constructor(props){
  //     super(props)
  //     this.state = {
  //         allthedata:[
  //             {
  //                 clientName: '',
  //                 id:''
                  
  //             },
            
  //         ]
  //     }
  // }
      // addNewform =(form) =>{
      //     form.id = Math.random().toString()
      //     this.setState({
      //         allthedata:[...this.state.allthedata, form]
      //     })
      // }
  
  render(){
  return (
    <NavigationContainer>
             <Stack.Navigator>
                <Stack.Screen name="Loginhere"  component={Loginscreen}/>
                <Stack.Screen name="Signuphere"  component={Signupscreen}/>
                <Stack.Screen name="Landingscreen"  component={Landingscreen}/>
                <Stack.Screen name="Addnew"  component={Addnew }/>
                <Stack.Screen name="Existingclients"  component={Existingclients} />

                
           </Stack.Navigator>
    </NavigationContainer>
    
  )
}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});