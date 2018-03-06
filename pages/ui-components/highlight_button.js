import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Colors from '../../helpers/colors';

export default class HighlightButton extends Component {

  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.primary
  }
});