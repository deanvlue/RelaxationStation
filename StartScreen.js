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

import Quote from './Quote'

const zenImage = require('./assets/zen.png'); 

class StartScreen extends Component {
  render() {
    return (
     
             <View style={styles.container}>
                <TouchableOpacity style={styles.button}  onPress={ this.props.onStartHandler }>
                  <Image source={zenImage} style={styles.buttonImage}/>
                  <Text style={styles.readyText}> I'm Ready to relax... </Text>
                </TouchableOpacity>

            </View>
    )
  }
}     

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889dad',
  },
  readyText:{
    fontSize: 20,
    fontStyle: 'italic',
    color:'#f3f3f3',
    marginTop: 15,
    textAlign: 'center'
  },
  button:{
    backgroundColor:'#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  buttonImage:{
    width: 200,
    height: 200
  }
});

export default StartScreen
