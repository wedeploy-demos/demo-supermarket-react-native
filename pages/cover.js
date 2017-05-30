import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image
} from 'react-native';

import Colors from '../helpers/colors'

export default class Cover extends Component {
	static navigationOptions = {
		title: 'Chat with Lucy',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<Image style={styles.icon} source={require("../resources/apple-icon.png")}/>
					<Text style={styles.title}>Supermarket</Text>
					<Text style={styles.description} >An ecommerce mobile demo for WeDeploy</Text>
				</View>
				<View style={styles.containerBottom}>
					<TouchableOpacity style={styles.signUpButton} onPress={()=> true}>
						<Text style={styles.signUpButtonText}>Sign up</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginButton} title={"Log in"} onPress={() => navigate('Login')}>
						<Text style={styles.loginButtonText}>Log in</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary
	},

	containerTop: {
		flex: 2,
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},

	containerBottom: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},

	icon: {
		height: 140,
		width: 140,
		resizeMode: 'contain',
		margin: 0
	},

	title: {
		height: 55,
		margin: 20,
		marginTop: 0,
		marginBottom: 5,
		textAlignVertical: 'center',
		color: 'white',
		fontSize: 46,
		fontWeight: '900'
	},

	description: {
		height: 100,
		margin: 20,
		marginTop: 0,
		fontSize: 24,
		color: Colors.almostWhite,
		fontWeight: '500'
	},

	signUpButton: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		backgroundColor: 'white',
		margin: 20,
		marginBottom: 12,
		borderRadius: 4
	},

	loginButton: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		margin: 20,
		marginTop: 0,
		marginBottom: 31,
		backgroundColor: Colors.almostBlack,
		borderRadius: 4
	},

	signUpButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Colors.primary
	},

	loginButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white'
	}
})
