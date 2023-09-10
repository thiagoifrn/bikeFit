import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable'

import { StepOne } from '../StepOne';
import { StepTwo } from '../StepTwo';




export default function Stepper() {
    const [step, setStep] = useState(0)
 return (
    <View style={styles.container}>
        <View style={styles.containerLogo} >
            <Animatable.Image
                animation='flipInX'
                source={require('../../assets/logoFullBike.png')}
                style={{ width:'50%' }}
                resizeMode="contain"
            />
            <Animatable.Text style={styles.title} animation='fadeInLeft' delay={500}>Setup da Bike</Animatable.Text>
        </View>
        <View style={styles.divider}/>
        <Animatable.View style={styles.containerStepper}>
            {step == 0 ? (
                <StepOne setStep={setStep} step={step}/>
            ): step == 1 ? (
                <StepTwo setStep={setStep} step={step} />  
            ): null}
            
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
        paddingLeft: 10,
    },
    title: {
        fontSize:30,
        fontWeight:'bold',
        color:'#B22222',
        alignSelf:'center'
    },
    divider: {
        marginTop:15,
        borderBottomWidth:3,
        width:'95%',
        alignSelf:'center',
        borderColor:'#a1a1a1'
    },
    containerStepper :{
        padding:'8%',
        height:'100%'
    }
    
})