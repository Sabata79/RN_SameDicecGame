import React from 'react';
import { Text, View } from 'react-native';
import Styles from './style/styles.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Gameboard from './components/Gameboard.js';

export default function App() {
  return (
    <View style={Styles.container}>
      <Header/>
      <Gameboard/>
      <Footer/>
    </View>
  );
}