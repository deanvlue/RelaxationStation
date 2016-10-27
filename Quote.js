import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'

class Quote extends Component{
  render(){

    return(
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{this.props.quoteText}"</Text>
        <Text style={styles.sourceText}>{this.props.quoteSource}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  quoteContainer:{
    flex: 1,
    justifyContent: 'center'
  },
  quoteText:{
    fontFamily:(Platform.OS === 'ios')?
      'AvenirNext-Bold':
      'helveticaneue_bold',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 20,
    textAlign: 'left'
  },
  sourceText:{
    fontFamily: (Platform.OS === 'ios')?
      'AvenirNext-Bold':
      'helveticaneue_bold',
    fontSize: 20,
    color: '#f3f3f3',
    textAlign: 'right',
    fontStyle: 'italic'
  }
})

export default Quote