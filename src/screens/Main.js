import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';
import {TableCell} from '../components/TableCell.js';
import {ShowModalSample} from '../screens/modal/ShowModalSample.js';

export default class Main extends Component {

  static navigationOptions = {
    title: 'React Native Playground',
  };

  constructor() {
    super();
    /* load data source for list view */
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(menuData),
      activeModal:'',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/*
          This list view takes the menuData data source and displays it as a cell
        */}
        <ListView dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            /*
            TableCell is a Component created as a layout for cell
            Located at ./src/components/TableCell.js
            */
            <TableCell title={rowData.title} onPress={() => {
              /* rowData is a row from menuData. */
              this.navigateToScreen(rowData);
            }}/>
        }/>
        {/* Render modal page when selected  */}
        {this.renderModal()}
      </View>
    );
  }

  /*
  renderModal will populate the selected modal page when populated.
  Otherwise, it will return null when rendered.
  */
  renderModal() {
    switch (this.state.activeModal) {
      case 'ShowModalSample':
        /* Adding the ref prop will give access to state vatiables in component */
        return (
          <ShowModalSample ref="modalPage" />
        );
        break;
      default:
        return null;
    }
  }

  navigateToScreen(screen) {
    /* Obtain navigation object passed when instance was created at App.js */
    let { navigate } = this.props.navigation;
    switch (screen.type) {
      /* If modal, */
      case 'modal':
        this.setState({activeModal: screen.screenName});
        /* if screen type is modal and modal page exists in ref */
        if(screen.type == 'modal' && this.refs.modalPage != null){
          /* ref modalPage was created at renderModal function */
          /* set modalVisible state to true and show modal */
          this.refs.modalPage.setState({modalVisible : true});
        }
        break;
      case 'navigation':
        /* use navigate from navigation prop to screen mapped at App.js */
        navigate(screen.screenName);
        break;
    }
  }

}

/* Data to populate main menu */
const menuData = [{
  title: 'Modal Example',
  screenName: 'ShowModalSample',
  type:'modal',
},{
  title: 'Navigation Example',
  screenName: 'NavigationSample',
  type:'navigation',
}];

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
});
