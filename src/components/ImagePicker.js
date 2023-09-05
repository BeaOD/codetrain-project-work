import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ImagePicker(props) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
    

 
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );



      
      
      <StatusBar style="auto" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:50,
    marginTop:100,
  },
  loginText:{
    color:'#34aeeb',
    fontSize:50,
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
  },
  buttonText:{
    color:'white',
    fontSize:25,
  },
 



});
