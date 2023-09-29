
import React from 'react'
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landingscreen from "./src/screens/Landingscreen";
import Signupscreen from './src/screens/Signuphere'
import Loginscreen from './src/screens/Loginhere'
import Home from './src/screens/Home'
import MemberProfile from './src/screens/MemberProfile'
import FlowerList from './src/screens/FlowerList'
import OneFlower from './src/screens/OneFlower'


const Stack = createStackNavigator()

export default class App extends React.Component {
  
  
  render(){
  return (
    <NavigationContainer>
             <Stack.Navigator>
             
            
                <Stack.Screen name="Home"  component={Home}/>
                <Stack.Screen name="Loginhere"  component={Loginscreen}/>
                <Stack.Screen name="Signuphere"  component={Signupscreen}/>
                <Stack.Screen name="Landingscreen"  component={Landingscreen}/>
                <Stack.Screen name="MemberProfile"  component={MemberProfile }/>
                <Stack.Screen name="FlowerList"  component={FlowerList }/>
                <Stack.Screen name="OneFlower"  component={OneFlower }/>

                
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