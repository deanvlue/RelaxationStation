/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import Quote from './Quote'
import NextQuoteButton from './NextQuoteButton'

const bgImage = require('./assets/bg.png')


class QuoteScreen extends Component {
  render() {
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.container}>              
              <Quote quoteText={this.props.text} quoteSource={this.props.source}/>
              <NextQuoteButton onPress={this.props.onNextQuotePress}/>
            </View>
      </Image>
          )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundContainer:{
    flex:1,
    resizeMode:'cover',
    width: undefined,
    height: undefined
  }
});

QuoteScreen.propTypes ={
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isrequired,
  onNextQuotePress: PropTypes.func.isRequired,
}

export default QuoteScreen
