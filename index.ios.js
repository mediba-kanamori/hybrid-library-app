/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ListView,
  View
} from 'react-native';

import firebase from 'firebase';

import theme from './src/theme';
import styles from './src/styles';

import StatusBar from './src/components/StatusBar';
import ActionButton from './src/components/ActionButton';
import ListItem from './src/components/ListItem';

class HybridLibrary extends Component {
  constructor(props) {
    super(props);
    
    firebase.initializeApp({
      apiKey: "AIzaSyCwl33QyatT-anRNzGrfEBT4D-vEwmHmGQ",
      authDomain: "library-dac5d.firebaseapp.com",
      databaseURL: "https://library-dac5d.firebaseio.com",
      storageBucket: "library-dac5d.appspot.com",
    });
    
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }
  
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Hybrid Library" />
        
        <ListView dataSource={this.state.dataSource} renderRow={this.renderItem.bind(this)} />
        
        <ActionButton />
      </View>
    );
  }
  
  renderItem(item) {
    return (
      <ListItem item={item} />
    );
  }
}

AppRegistry.registerComponent('HybridLibrary', () => HybridLibrary);
