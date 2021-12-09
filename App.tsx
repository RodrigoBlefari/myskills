import React from 'react';
import { Home } from './src/pages/Home';
import { StatusBar } from 'react-native';

export default function app() {
  
  return (
    
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Home />
    </>
  )
}