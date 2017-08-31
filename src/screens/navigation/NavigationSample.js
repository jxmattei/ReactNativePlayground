/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class NavigationSample extends Component {

  static navigationOptions = {
    title: 'Nav Sample',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>NavigationSample content goes here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  containerText:{
    fontSize: 16,
  }
});
