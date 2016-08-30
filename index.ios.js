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
  View,
  AlertIOS,
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

    this.itemsRef = firebase.database().ref().child('items');
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', snap => {
      let items = [];
      snap.forEach(child => {
        items.push({
          imageUrl: child.val().imageUrl,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Hybrid Library" />

        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          contentContainerStyle={styles.itemList}
          renderRow={this.renderItem.bind(this)} />

        <ActionButton title="Add" onPress={this.addItem.bind(this)} />
      </View>
    );
  }

  renderItem(item) {
    const onPress = () => {
      AlertIOS.prompt(
        'かりる？',
        null,
        [
          { text: 'かりる', onPress: () => console.log('Cancel Pressed') },
          { text: 'やめる', onPress: () => console.log('Cancel Pressed') }
        ],
        'default'
      );
    }

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

  addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
        {
          text: 'Add',
          onPress: text => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }
}

AppRegistry.registerComponent('HybridLibrary', () => HybridLibrary);
