import React, { Component } from 'react';
import { MKButton } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';

const FloatingActionButton = MKButton.coloredFab()
  .withAccent(true)
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();

class ActionButton extends Component {
  render() {
    return (
      <FloatingActionButton onPress={this.props.onPress}>
        <Icon name="cart-plus" size={30} color="white" />
      </FloatingActionButton>
    );
  }
}

export default ActionButton;
