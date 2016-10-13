
import React, { Component, Prototypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import Quote from './Quote' 

class NextQuoteButton extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Siguiente Pensamiento </Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    borderWidth: 2,
    borderColor: '#ffffff',
    padding: 10,
    marginBottom: 20,
  },
  buttonText:{
    color: '#ffffff',
    fontSize: 18
  }
})

export default NextQuoteButton
