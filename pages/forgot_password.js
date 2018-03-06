import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
} from 'react-native';

import Colors from '../helpers/colors';
import ColorButton from './ui-components/color_button';
import BackButton from './ui-components/back_button';
import CustomInput from './ui-components/custom_input';

export default class ForgotPassword extends Component {

  render() {
    return (
      <View style={styles.container}>
        <BackButton 
          style={styles.backButton}
          onPress={() => this.props.navigation.goBack()}/>
        <Text style={styles.loginTitle}>Reset password</Text>
        <Text style={styles.description}>
          We will send you the instructions to reset your password
        </Text>
        <CustomInput
          style={styles.editText}
          placeholder={"email"}/>
        <ColorButton 
          style={styles.loginButton} 
          title={"Send Reset Instructions"} 
          onPress={() => true}/>
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
    fontSize: 36,
    fontWeight: '900'
  },

  description: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    color: Colors.darkGray,
    fontWeight: '400'
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