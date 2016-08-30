import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

class StatusBar extends Component {
  render() {
    return (
      <View style={styles.appBar}>
        <View style={styles.statusBar} />
        <View style={styles.navBar}>
          <Icon name="book" size={24} style={styles.navBarIcon} />
          <Text style={styles.navBarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default StatusBar;