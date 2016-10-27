/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Image,
  LayoutAnimation
} from 'react-native';

import Quote from './Quote'
import NextQuoteButton from './NextQuoteButton'

const bgImage = require('./assets/bg.png')

const tranquil = {
  duration: 500,
  create:{
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete:{
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity
  },
}

class QuoteScreen extends Component {
  componentWillUpdate(){
    //LayoutAnimation.spring()
    LayoutAnimation.configureNext(tranquil)
  }
  render() {
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.container}>              
              <Quote
                key={this.props.qId} 
                quoteText={this.props.text} 
                quoteSource={this.props.source}
              />
              <NextQuoteButton onPress={this.props.onNextQuotePress}/>
            </View>
      </Image>
          )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 8
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
  source: PropTypes.string.isRequired,
  onNextQuotePress: PropTypes.func.isRequired,
  qId: PropTypes.number.isRequired,
}

export default QuoteScreen
