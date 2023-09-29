import React from 'react'
import { StyleSheet, SafeAreaView, Text, Image, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';



export default function MemberProfile({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.line}>
     <Image source={require('../../assets/elizeu-dias-2EGNqazbAMk-unsplash.jpg')}
        style={styles.image}/>
   
    <View style={styles.separateText}>
        <Text numberOfLines={1}>LadyBug</Text>
        <Text>Prolific Writer</Text>
    </View>
    </View>
     
     <View style={styles.line}>
     <Text style={styles.line2}>
     <Entypo name="facebook-with-circle" size={24} color="black" />
     </Text>
     <Text style={styles.line2}>
     <Entypo name="linkedin-with-circle" size={24} color="black" />
     </Text>
     </View>

     <View style={styles.line3}>
      
     <Entypo name="phone" size={24} color="black" />
     <Text style={styles.separateText}>+23341941919</Text>
     </View>

     <View style={styles.line3}>
     <Entypo name="mail" size={24} color="black" />
     <Text style={styles.separateText}>cd@gmail.com</Text>
     </View>
     <View style={styles.line3}>
     <Entypo name="location-pin" size={24} color="black" />
     <Text style={styles.separateText}>East Legon</Text>

     </View>
        
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      marginHorizontal:30,
      marginTop:30,
    },
    image:{
      width:50 ,
       height:50,
       borderRadius:50,
  },

  separateText:{
      justifyContent:'center',
      marginHorizontal:25,
      flex:4
  },
  line:{
    flexDirection:'row',
    marginHorizontal:70,
    marginTop:10
  },
  line3:{
    flexDirection:'row',
    marginHorizontal:70,
    marginTop:15,
  },
  line2:{
    flexDirection:'row',
    marginHorizontal:10,
    marginTop:10,

  }
  });
  