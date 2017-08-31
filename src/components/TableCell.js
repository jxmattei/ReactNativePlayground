/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, } from 'react-native';

export class TableCell extends Component {

  render() {
    console.log(this.props);
    return (
      <TouchableHighlight underlayColor={'#07f'} onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height:40,
    justifyContent:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingLeft: 10,
  }
});
