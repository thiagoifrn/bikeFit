import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
          <StatusBar backgroundColor="black" barStyle="light-content"/>
          <Routes/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

