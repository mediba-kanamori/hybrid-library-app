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
  Navigator,
  AlertIOS,
} from 'react-native';
import Camera from 'react-native-camera';

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

    this.itemsRef = firebase.database().ref().child('items');

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      showCamera: false,
    };

    this.camera = null;
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

        <Navigator
          style={{alignSelf: 'stretch'}}
          initialRoute={{name: 'Books'}}
          renderScene={this.renderScene.bind(this)} />

        <ActionButton title="Add" onPress={this.navigateBarCodeReader.bind(this)} />
      </View>
    );
  }

  renderScene(route, navigator) {
    if (!this.navigator) {
      this.navigator = navigator;
    }

    if (route.name === 'Books') {
      return (
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          contentContainerStyle={styles.itemList}
          renderRow={this.renderItem.bind(this)} />
      );
    }

    if (route.name === 'BarCodeReader') {
      if (this.state.showCamera) {
        return (
          <Camera
            ref={cam => this.camera = cam}
            style={{flex:1}}
            aspect={Camera.constants.Aspect.fill}
            onBarCodeRead={this.readBarCode.bind(this)}>
            <Text>[CAPTURE BARCODE !]</Text>
          </Camera>
        );
      }

      return (
        <View />
      )
    }
  }

  renderItem(item) {
    const onPress = () => {
      AlertIOS.prompt(
        'かりる？',
        null,
        [
          { text: 'かりる', onPress: () => console.log('Cancel Pressed'), style: 'cancel', },
          { text: 'やめる', onPress: () => console.log('Cancel Pressed'), style: 'destructive', }
        ],
        'default'
      );
    }

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

  navigateBarCodeReader() {
    this.setState({ showCamera: true });

    this.navigator.push({
      name: 'BarCodeReader',
    });
  }

  readBarCode(e) {
    this.setState({ showCamera: false });

    console.log(`${e.type}: ${e.data}`);

    AlertIOS.prompt(
      '情熱プログラマー',
      'かりる？',
      [
        { text: 'やめる', onPress: () => this.navigator.push({ name: 'Books', }) },
        {
          text: 'かりる',
          onPress: () => {
            AlertIOS.alert(
              'かしだし完了',
              '9/20までに読んでね！',
              () => this.navigator.push({ name: 'Books', }),
            );
          }
        },
      ],
      null,
      'default'
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
