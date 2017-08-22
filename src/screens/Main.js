import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ListView, TouchableHighlight, Modal } from 'react-native';
// import ShowModalSample from './ShowModalSample.js'

export default class Main extends Component {

  state = {
    modalVisible : false,
  }

  constructor() {
    super();

    this.setState({modalVisible: false});

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(menuData),
    };
  }

  setModalVisible(visible) {
    console.log('here');
    this.setState({modalVisible: visible});
  }


  navigateToPage(pageName){

  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.mainMenuHeader}>
            <Text style={styles.mainMenuHeaderTitle}>React Native Playground</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(true);
            }}>
              <View style={styles.mainMenuCell}>
                <Text>{rowData.title}</Text>
              </View>
            </TouchableHighlight>
          }/>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={false}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
      </View>
    );
  }
}

const menuData = [{
  title: 'Modal Example',
  pageNavigation: 'PageNav',
},
// {
//   title: 'Navigation',
//   pageNavigation: 'PageNav',
// }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mainMenuHeader:{
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 60,
    justifyContent: 'flex-end',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
  },
  mainMenuHeaderTitle: {
    paddingBottom: 12,
    fontWeight: '500',
  },
  mainMenuCell: {
    height:40,
    justifyContent:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingLeft: 10,
  }
});
