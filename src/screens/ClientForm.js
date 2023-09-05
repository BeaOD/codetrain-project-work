import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, View , FlatList} from 'react-native';
import { Formik } from 'formik';


export default function ClientForm({addNewClient}) {
  return (
    <SafeAreaView>
        <Formik
        initialValues={{clientName:'', email:'', contact:'', location:'',id:''}}
        onSubmit={(values)=>{
            addNewClient(values)
            
        }}
        >

            {(props)=>(
                <View>
                    <TextInput placeholder='Name of Client'
                    onChangeText={props.handleChange('clientName')}
                    value={props.values.clientName}/>

                    <TextInput placeholder='Email'
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}/>

                    <TextInput placeholder='Location'
                    multiline
                    onChangeText={props.handleChange('location')}
                    value={props.values.location}/>

                    <TextInput placeholder='Contact'
                    onChangeText={props.handleChange('contact')}
                    value={props.values.contact}
                    keyboardType='numeric'/>

                    <TouchableOpacity
                    onPress={props.handleSubmit}>
                    <Text>Add</Text></TouchableOpacity>


                </View>
            )}

        </Formik>
    </SafeAreaView>
  )
}
