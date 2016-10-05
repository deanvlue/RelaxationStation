/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Quote from './Quote'


class QuoteScreen extends Component {
  render() {
    return (
            <View style={styles.container}>              
              <Quote quoteText='Esta es una prueba' quoteSource='-- Paulo Cuello'/>
            </View>
          )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefeea',
  }
});

export default QuoteScreen
