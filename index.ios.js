/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import theme from './src/theme';

import FloatingActionButton from './src/components/FloatingActionButton';

import Icon from 'react-native-vector-icons/FontAwesome';

class HybridLibrary extends Component {
  render() {
    return (
      <View>
        <FloatingActionButton>
          <Icon name="cart-plus" size={30} color="white" />
        </FloatingActionButton>
      </View>
    );
  }
}

AppRegistry.registerComponent('HybridLibrary', () => HybridLibrary);
