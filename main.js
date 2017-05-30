import React, { Component } from 'react';
import {
	View,
	Text,
	Navigator
} from 'react-native';
import Cover from './pages/cover'

export default class DemoSupermarketRN extends Component {

	render() {
		return (
			<Navigator>
				<Cover />
			</Navigator>
		);
	}
}