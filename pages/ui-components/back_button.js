import React, { Component } from 'react';
import {
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import Colors from '../../helpers/colors';

export default class BackButton extends Component {
	
	render() {
		return (
			<TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
				<Text style={style.backButton}>{'\uE03D'} </Text>
			</TouchableOpacity>
		);
	}
}

const style = StyleSheet.create({

	backButton: {
		fontFamily: 'loop-icons-12px',
		fontSize: 24,
		color: Colors.darkGray
	}
})