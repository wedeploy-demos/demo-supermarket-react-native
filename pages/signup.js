import React, { Component } from 'react'
import Dimensions from 'Dimensions';
import { 
	View,
	ScrollView, 
	Text, 
	StyleSheet, 
} from 'react-native';

import Colors from '../helpers/colors';
import ColorButton from './ui-components/color_button';
import BackButton from './ui-components/back_button';
import CustomInput from './ui-components/custom_input';
import HighlightButton from './ui-components/highlight_button'

export default class SignUp extends Component {

	render() {
		return (
			<View style={styles.container}>
				<BackButton 
						style={styles.backButton}
						onPress={() => this.props.navigation.goBack()}/>
				<Text style={styles.loginTitle}>Sign up</Text>
				<ScrollView 
					style={{flex:1}}
					ref={"scrollview"}
					horizontal
					scrollEnabled={false}
					showsHorizontalScrollIndicator={false}>
					<View style={styles.pageContainer}>
						<Text style={styles.description}>
							What is your name?
						</Text>
						<CustomInput
							style={styles.editText}
							placeholder={"Your full name"}/>
						<ColorButton 
							style={styles.loginButton} 
							title={"Next"} 
							onPress={() => this.moveToPage(2)}/>
					</View>
					<View style={styles.pageContainer}>
						<Text style={styles.description}>
							And your email?
						</Text>
						<CustomInput
							style={styles.editText}
							placeholder={"email address"}/>
						<View style={styles.combinedButtonContainer}>
							<ColorButton 
								style={styles.previousButton} 
								title={"Previous"} 
								textColor={Colors.darkAlmostBlack}
								onPress={() => this.moveToPage(1)}/>
							<ColorButton 
								style={styles.nextButton} 
								title={"Next"} 
								onPress={() => this.moveToPage(3)}/>
						</View>
					</View>
					<View style={styles.pageContainer}>
						<Text style={styles.description}>
							Now, create a password
						</Text>
						<Text style={styles.description2}>
							it must have 6 characters or more.
						</Text>
						<CustomInput
							style={styles.editText}
							placeholder={"password"}
							secureTextEntry/>
						<View style={styles.combinedButtonContainer}>
							<ColorButton 
							style={styles.previousButton} 
							title={"Previous"} 
							textColor={Colors.darkAlmostBlack}
							onPress={() => this.moveToPage(2)}/>
						<ColorButton 
							style={styles.nextButton} 
							title={"Sign up"} 
							onPress={() => true}/>
						</View>
					</View>
				</ScrollView>
				<View style={styles.bottomView}>
					<Text style={styles.bottomViewText}>
						Already have an account?
					</Text>
					<HighlightButton title={"Log in"}/>
				</View>
			</View>
			
		)
	}

	moveToPage(page) {
		const { width } = Dimensions.get('window');
		this.refs.scrollview.scrollTo({x: width * (page - 1)});
	}
}

const styles = new StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},

	pageContainer: {
		height: 400,
		width: Dimensions.get('window').width,
		backgroundColor: 'white'
	},

	backButton: {
		marginTop: 30,
		marginLeft: 20
	},

	loginTitle: {
		textAlign: 'center',
		marginTop: 100,
		fontSize: 36,
		fontWeight: '900'
	},

	description: {
		textAlign: 'center',
		fontSize: 20,
		margin: 20,
		color: 'black',
		fontWeight: '700'
	},

	description2: {
		textAlign: 'center',
		fontSize: 16,
		color: Colors.darkGray,
		fontWeight: '500',
		marginBottom: 10,
		marginTop: -10
	},

	editText: {
		height: 60,
		margin: 20,
		marginTop: 12,
		marginBottom: 0,
		borderRadius: 4
	},

	loginButton: {
		height: 60,
		margin: 20,
		marginTop: 12,
		marginBottom: 31
	},

	combinedButtonContainer: {
		flexDirection: 'row',
		margin: 20,
		height: 60
	},

	nextButton: {
		flex:1, 
		height: 60
	},

	previousButton: {
		flex:1, 
		height: 60,
		marginRight: 21,
		backgroundColor: Colors.darkerGray
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