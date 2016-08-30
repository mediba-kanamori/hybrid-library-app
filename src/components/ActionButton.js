import React, { Component } from 'react';
import { MKButton } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

const FloatingActionButton = MKButton.coloredFab()
  .withAccent(true)
  .withStyle({
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
  })
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();

class ActionButton extends Component {
  render() {
    return (
      <FloatingActionButton onPress={this.props.onPress}>
        <Icon name="cart-plus" size={24} color="white" />
      </FloatingActionButton>
    );
  }
}

export default ActionButton;
