import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View,Image,Text } from 'react-native';


export default  function FlowerList  ({navigation}){
 

    
  return (
    <SafeAreaView style={styles.container} showsVerticalScrollIndicator={false}>   
    <View style={styles.line}>
     <Image source={require('../../assets/uriel-WS4JcpoZz6E-unsplash.jpg')}
        style={styles.image}/>
   
    <View style={styles.separateText}>
        <Text numberOfLines={1} style={styles.textHeading}>
          Grown In The Mountains Of Krygyztan, Aluguntugun Flowers 
          </Text>
        <View style={styles.sameLine}> 
           <Image source={require('../../assets/elizeu-dias-2EGNqazbAMk-unsplash.jpg')}
        style={styles.image2}/> 
        
        <Text  style={styles.secondText}>Kwa Manu</Text>
        <Text  style={styles.secondText}>4 min read</Text>
        </View>
    </View>
    </View> 
    
    <View style={styles.lines}>
     <Image source={require('../../assets/saffu-Ct1Mx5OTn9A-unsplash.jpg')}
        style={styles.image}/>
   
    <View style={styles.separateText}>
        <Text numberOfLines={1} style={styles.textHeading}>
          Seasonal Flowers From The Ghanaian Culture 
          </Text>
        <View style={styles.sameLine}> 
           <Image source={require('../../assets/usman-yousaf-xYzEQptq7XU-unsplash.jpg')}
        style={styles.image2}/> 
        
        <Text  style={styles.secondText}>Jo Troski</Text>
        <Text  style={styles.secondText}>12 min read</Text>
        </View>
    </View>
    </View>

        <View style={styles.lines}>
     <Image source={require('../../assets/steven-kuppers-sW9Z1u9TYDo-unsplash.jpg')}
        style={styles.image}/>
   
    <View style={styles.separateText}>
        <Text numberOfLines={1} style={styles.textHeading}>
          Grown In The Mountains Of Krygyztan, Aluguntugun Flowers 
          </Text>
        <View style={styles.sameLine}> 
           <Image source={require('../../assets/thought-catalog--v7EOw5SA4I-unsplash.jpg')}
        style={styles.image2}/> 
        
        <Text  style={styles.secondText}>Taicoon Akos</Text>
        <Text  style={styles.secondText}>6 min read</Text>
        </View>
    </View>
    </View>  

    <View style={styles.lines}>
     <Image source={require('../../assets/ananthu-selvam-62saZ_T5AP0-unsplash.jpg')}
        style={styles.image}/>
   
    <View style={styles.separateText}>
        <Text numberOfLines={1} style={styles.textHeading}>
          Grown In The Mountains Of Krygyztan, Aluguntugun Flowers 
          </Text>
        <View style={styles.sameLine}> 
           <Image source={require('../../assets/hichem-dahmani-9VcFGAlf1lc-unsplash.jpg')}
        style={styles.image2}/> 
        
        <Text  style={styles.secondText}>West Paley</Text>
        <Text  style={styles.secondText}>6 min read</Text>
        </View>
    </View>
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
  image:{
    width:150 ,
     height:150,
     borderRadius:5,
     marginHorizontal:7,
     marginTop:7,
     marginBottom:7
},
  image2:{
    width:25 ,
     height:25,
     borderRadius:50,
     marginTop: 10,
},

separateText:{
    justifyContent:'center',
    marginHorizontal:25,
    flex:4
},
line:{
  flexDirection:'row',
  marginHorizontal:70,
  backgroundColor:'pink'
},
lines:{
  flexDirection:'row',
  marginHorizontal:70,
  backgroundColor:'pink',
  marginTop:10,
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
}
});
