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
  constructor(props){
    super(props)

    this.state={
      quoteIndex: 2,
    }

    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this)
  }

  _incrementQuoteIndex(){
    let newIndex

    if(this.state.quoteIndex + 1 === quotes.length){
      newIndex=0
    }else{
      newIndex = this.state.quoteIndex + 1
    }

    this.setState({
      quoteIndex: newIndex,
    })
  }

  render() {
    const quote = quotes[this.state.quoteIndex]
    return (
      <Navigator 
        initialRoute={{name:'StartScreen'}}
        renderScene={(route, navigator)=> {
          switch(route.name){
            case 'StartScreen':
              return <StartScreen onStartHandler={()=> navigator.push({name:'QuoteScreen'})} />
            case 'QuoteScreen':
              return <QuoteScreen text={quote.text} source={quote.source} onNextQuotePress={this._incrementQuoteIndex}/>
          }
        }}
      />
    );
  }
}


AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
