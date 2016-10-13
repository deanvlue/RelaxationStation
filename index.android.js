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

const { quotes } = require('./quotes.json')

const zenImage = require('./assets/zen.png'); 

class RelaxationStation extends Component {
  render() {
    const quote = quotes[3]
    return (
      <Navigator 
        initialRoute={{name:'StartScreen'}}
        renderScene={(route, navigator)=> {
          switch(route.name){
            case 'StartScreen':
              return <StartScreen onStartHandler={()=> navigator.push({name:'QuoteScreen'})} />
            case 'QuoteScreen':
              return <QuoteScreen text={quote.text} source={quote.source}/>
          }
        }}
      />
    );
  }
}


AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
