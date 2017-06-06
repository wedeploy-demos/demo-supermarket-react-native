import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	View,
	TextInput,
	StyleSheet
} from 'react-native';

import Colors from '../../helpers/colors';

export default class CustomInput extends Component {

	constructor(props) {
		super();
		this.state = {
			secureTextEntry: props.secureTextEntry
		}

		this.alterSecureEntry = this.alterSecureEntry.bind(this);
	}

	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<TextInput
					placeholder={this.props.placeholder}
					placeholderTextColor={Colors.darkGray}
					underlineColorAndroid={'transparent'}
					ref={"password"}
					style={styles.editText}
					selectionColor={Colors.primary}
					secureTextEntry={this.state.secureTextEntry}
				/>
				{this.props.secureTextEntry && 
					<TouchableOpacity 
						style={styles.showPasswordButton} 
						onPress={this.alterSecureEntry}>
						<Text style={styles.showPasswordText}>
							{this.state.secureTextEntry ? '\u{E04B}':'\u{E037}'}
						</Text>
					</TouchableOpacity>
				}
			</View>
		
		);
	}

	alterSecureEntry() {
		// Fixes bug with changing font
		this.refs.password.blur();

		this.setState({
			secureTextEntry: !this.state.secureTextEntry
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: Colors.darkerGray,
		alignItems: 'center'
	},

	editText: {
		flex: 3,
		color: Colors.darkAlmostBlack,
		borderRadius: 4,
		padding: 20,
	},

	showPasswordButton: {
		flex: 0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.darkerGray,
		width: 36,
		height: 36,
		marginRight: 12,
		borderRadius: 4
	},

	showPasswordText: {
		fontFamily: 'loop-icons-12px', 
		fontSize: 12,
		width: 16,
		height: 14
	}
})