import React from 'react'
import { StyleSheet, SafeAreaView, View,Image,Text } from 'react-native';



export default function OneFlower() {
  return (
    <SafeAreaView style={styles.container}>
            <View>
        
        <Image source={require('../../assets/uriel-WS4JcpoZz6E-unsplash.jpg')}
        style={styles.image}/>
      
    </View>

    <View>
      <Text style={styles.textHeading}>
      Grown In The Mountains Of Krygyztan, Aluguntugun Flowers 
          
      </Text>
    </View>

    <View style={styles.sameLine}> 
           <Image source={require('../../assets/elizeu-dias-2EGNqazbAMk-unsplash.jpg')}
        style={styles.image2}/> 
        
        <Text  style={styles.secondText}>Kwa Manu</Text>
        <Text  style={styles.secondText}>4 min read</Text>
        </View>

        <View>
          <Text style={styles.thirdText}>
          In monocots, a single leave emerges from the cotyledon and the 
          leaves have parallel venation. They have a fibrous root system.
           Petals and stamens are in a combination of three.

           Annuals: These are plants that complete their lifecycle i.e., 
           germinate, flower, produce seed, and die in one year. 
           For example, asters, carnations, snapdragon, etc.
          </Text>
        </View>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container:{
      backgroundColor:'#f0f0f0',
      flex:1,
        borderRadius:5,
        marginHorizontal:5,
        marginVertical:7,

    },
    image:{
      height: 250,
      width:'100%',
      marginBottom:80,
    },
    image2:{
      width:25 ,
       height:25,
       borderRadius:50,
       marginTop: 10,
  },
  
textHeading:{
  flexDirection:'row',
  fontWeight:'bold',
  marginTop:5,
  fontSize:18,
  marginBottom:15
},
sameLine:{
  flexDirection:'row',
},
secondText:{
  marginTop:10,
  marginHorizontal:4,
  color:'gray'
},
thirdText:{
  marginTop:10,
  marginHorizontal:4,
  color:'gray'
}
})
