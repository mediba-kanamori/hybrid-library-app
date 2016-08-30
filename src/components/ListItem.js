import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import styles from '../styles';

class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={styles.item}>
        <Image source={{uri: this.props.item.imageUrl}} style={styles.itemImage} />
      </TouchableHighlight>
    );
  }
}

export default ListItem;
