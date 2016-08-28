import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from '../styles';

class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;