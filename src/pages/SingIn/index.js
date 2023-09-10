import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function SingIn() {
  const navigation = useNavigation()
 return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack} onPress={()=> {
        navigation.pop()
      }} >
        <AntDesign name="back" size={34} color="white" /> 
      </TouchableOpacity>
      <Animatable.View style={styles.containerHeader} animation='fadeInLeft' delay={500}> 
          <Text style={styles.message} >Bem vindo(a)</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation='fadeInUp'>
        <Text style={styles.label} >Email</Text>
        <TextInput style={styles.inputEmail} placeholder='Digite um email...' />

        <Text style={styles.label} >Senha</Text>
        <TextInput style={styles.inputSenha} placeholder='Digite sua senha...'  secureTextEntry/>

        <TouchableOpacity style={styles.buttonLogin} onPress={()=> {
        navigation.navigate('Stepper')
      }} >
        <Text style={styles.textButtonLogin} >Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> {
       
      }} >
        <Text style={styles.textButton} >Não possui uma conta? cadastre-se</Text>
      </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#B22222'

  },
  buttonBack: {
    paddingTop:20,
    paddingLeft:10,
  },
  containerHeader: {
    padding:'10%'
  },
  message:{
  fontSize:24,
  fontWeight:'bold',
  color:'#fff'
  },
  containerForm: {
    backgroundColor:'#fff',
    flex:1,
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    padding:'8%'

  },
  label: {
    fontSize:20,
  },
  inputEmail: {
    borderBottomWidth:1,
    height:40,
    marginBottom:12,
    fontSize:18
  },
  inputSenha: {
    borderBottomWidth:1,
    height:40,
    marginBottom:12,
    fontSize:18
  },
  buttonLogin :{
    backgroundColor:'#363636',
    paddingVertical:10,
    borderRadius: 50,
    marginTop:14,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  textButtonLogin:{
    fontSize:18,
    fontWeight:'bold',
    color:'#fff'
  },
  button: {
    marginTop:14,
    alignSelf:'center',
  },
  textButton: {
    color:'#a1a1a1'
  }

})