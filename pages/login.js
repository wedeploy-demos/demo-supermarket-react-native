import React, { Component } from 'react'
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../helpers/colors';

export default class Login extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.loginTitle}>Log in</Text>
				<TextInput 
					placeholder={"email"}
					placeholderTextColor={Colors.textInputTextColor}
					style={styles.editText}
				/>
				<TextInput
					placeholder={"password"}
					placeholderTextColor={Colors.textInputTextColor}
					style={styles.editText}
				/>
				<TouchableOpacity style={styles.loginButton} title={"Log in"} onPress={() => true}>
					<Text style={styles.loginButtonText}>Log in</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.forgotPasswordButtonText}>Forgot your password?</Text>
				</TouchableOpacity>
				<View style={styles.bottomView}>
					<Text style={styles.bottomViewText}>
						Don't you have an account?
					</Text>
					<TouchableOpacity>
					<Text style={styles.forgotPasswordButtonText}>Sign up</Text>
				</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = new StyleSheet.create({
	container: {
		flex: 1
	},

	loginTitle: {
		textAlign: 'center',
		marginTop: 100,
		marginBottom: 39,
		fontSize: 36,
		fontWeight: '900'
	},

	editText: {
		color: Colors.textInputTextColor,
		backgroundColor: Colors.almostBlack,
		height: 60,
		margin: 20,
		marginTop: 12,
		marginBottom: 0,
		padding: 20,
		borderRadius: 4
	},

	loginButton: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		margin: 20,
		marginTop: 12,
		marginBottom: 31,
		backgroundColor: Colors.primary,
		borderRadius: 4
	},

	loginButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white'
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