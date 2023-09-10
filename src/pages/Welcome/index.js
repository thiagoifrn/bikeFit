import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation()
 return (
   <View style={styles.container} > 
    <View style={styles.containerLogo} >
      <Animatable.Image
        animation='flipInX'
        source={require('../../assets/logoFullBike.png')}
        style={{ width:'100%' }}
        resizeMode="contain"
      />
    </View>

    <Animatable.View style={styles.containerForm} delay={600} animation='fadeInUp' >
      <Text style={styles.title} >Bike Fit, mais que um Setup</Text>
      <Text style={styles.textLogin} >Faça login para começar </Text>

      <TouchableOpacity style={styles.button} onPress={()=> {
        navigation.navigate('SingIn')
      }} >
        <Text style={styles.textButton} >Acessar</Text>
      </TouchableOpacity>
    </Animatable.View>
   </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#fff'
  },
  containerLogo : {
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    
  },
  containerForm: {
    flex:1,
    backgroundColor:'#D3D3D3',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    padding: '8%'
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:16,
  },
  textLogin: {
    color:'#363636',
    fontSize:16
  },
  button: {
    position:'absolute',
    alignSelf:'center',
    bottom:'30%',
    backgroundColor:'#B22222',
    paddingVertical:10,
    borderRadius: 50,
    width:'70%',
    alignItems:'center',
    justifyContent:'center'
  },
  textButton: {
    fontSize:18,
    fontWeight:'bold',
    color:'#fff'
  }
  
});