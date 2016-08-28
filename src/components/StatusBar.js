import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

class StatusBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.statusBar} />
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default StatusBar;