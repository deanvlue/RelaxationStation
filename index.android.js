/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';

import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'

const zenImage = require('./assets/zen.png'); 

class RelaxationStation extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{name:'StartScreen'}}
        renderScene={(route, navigator)=> {
          switch(route.name){
            case 'StartScreen':
              return <StartScreen onStartHandler={()=> navigator.push({name:'QuoteScreen'})} />
            case 'QuoteScreen':
              return <QuoteScreen />
          }
        }}
      />
    );
  }
}


AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
