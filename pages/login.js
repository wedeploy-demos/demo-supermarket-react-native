import React, { Component } from 'react'
import { 
	Button, 
	View, 
	Text, 
	TextInput, 
	StyleSheet, 
	TouchableOpacity
} from 'react-native';

import Colors from '../helpers/colors';
import ColorButton from './ui-components/color_button';
import BackButton from './ui-components/back_button';
import HighlightButton from './ui-components/highlight_button';

export default class Login extends Component {

	render() {
		return (
			<View style={styles.container}>
				<BackButton 
					style={styles.backButton}
					onPress={() => this.props.navigation.goBack()}/>
				<Text style={styles.loginTitle}>Log in</Text>
				<TextInput 
					placeholder={"email"}
					placeholderTextColor={Colors.textInputTextColor}
					underlineColorAndroid={'transparent'}
					style={styles.editText}
				/>
				<TextInput
					placeholder={"password"}
					placeholderTextColor={Colors.textInputTextColor}
					style={styles.editText}
				/>
				<ColorButton 
					style={styles.loginButton} 
					title={"Log in"} 
					onPress={() => true}/>
				<HighlightButton title={"Forgot your password?"}/>
				<View style={styles.bottomView}>
					<Text style={styles.bottomViewText}>
						Don't you have an account?
					</Text>
					<HighlightButton title={"Sign up"}/>
				</View>
			</View>
		)
	}
}

const styles = new StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},

	backButton: {
		marginTop: 30,
		marginLeft: 20
	},

	loginTitle: {
		textAlign: 'center',
		marginTop: 100,
		marginBottom: 39,
		fontSize: 36,
		fontWeight: '900'
	},

	editText: {
		color: Colors.darkGray,
		backgroundColor: Colors.almostBlack,
		height: 60,
		margin: 20,
		marginTop: 12,
		marginBottom: 0,
		padding: 20,
		borderRadius: 4,
	},

	loginButton: {
		height: 60,
		margin: 20,
		marginTop: 12,
		marginBottom: 31
	},

	forgotPasswordButtonText: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: Colors.primary
	},

	bottomView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 67,
		marginBottom: 0,
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 8,
		shadowOpacity: 0.1
	},

	bottomViewText: {
		marginRight: 5, 
		color: Colors.bottomViewText,
		fontWeight: 'bold'
	}
})