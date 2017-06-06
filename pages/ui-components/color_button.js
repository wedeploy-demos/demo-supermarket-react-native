import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import Colors from '../../helpers/colors';

export default class ColorButton extends Component {

	render() {
		return (
			<TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
				<Text style={[styles.text, {color: this.props.textColor || 'white'}]}>{this.props.title}</Text>
			</TouchableOpacity>	
		);
	}

}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontWeight: '900',
		fontSize: 16
	},

	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary,
		borderRadius: 4
	}
});