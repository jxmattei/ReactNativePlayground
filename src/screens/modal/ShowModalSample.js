/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity, /* Used for dismiss button */
  Modal
} from 'react-native';

export class ShowModalSample extends Component {

  /* constructor function with its included proeprties */
  constructor(props){
  	super(props);
  	this.state = {modalVisible:true};
  }

  render() {
    return (
      /* Added View in modal. Visibility is controlled by modalVisible state */
      <Modal
        animationType={"slide"}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
        <View style={styles.container}>
          {/*
             This is a customized header created just for aestechic reasons.
             Not related to the Navigation tool
          */}
          <View style={styles.headerView}>
            <View style={styles.statusBarView}></View>
            <View style={styles.mainMenuHeader}>
              <View>
                <View style={styles.titleContainer}>
                  <Text style={styles.mainMenuHeaderTitle}>Modal Sample</Text>
                </View>
                <View style={styles.rightButtonContainer}>
                    <TouchableOpacity onPress={() => {this.setState({modalVisible : false})}}>
                      <View style={styles.dismissButton}>
                        <Text style={styles.dismissButtonTitle}>Dismiss</Text>
                      </View>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentView}>
            <Text style={styles.contentViewText}>Content for your modal goes here</Text>
          </View>
        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView:{
    backgroundColor: '#eee',
  },
  statusBarView:{
    height: 20,
  },
  mainMenuHeader:{
    height: 45,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleContainer:{
    flex: 1,
  },
  mainMenuHeaderTitle: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
  rightButtonContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
  dismissButton: {
    backgroundColor: '#eee',
    alignSelf: 'center',
  },
  dismissButtonTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'blue',
  },
  contentView:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  contentViewText:{
    fontSize: 18,
  }
});
