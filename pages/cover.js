import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import Colors from '../helpers/colors';
import ColorButton from './ui-components/color_button';

export default class Cover extends Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Image 
            style={styles.icon} 
            source={require("../resources/apple-icon.png")}/>
          <Text style={styles.title}>
            Supermarket
          </Text>
          <Text style={styles.description} >
            An ecommerce mobile demo for WeDeploy
          </Text>
        </View>
        <View style={styles.containerBottom}>
          <ColorButton 
            style={styles.signUpButton} 
            title={"Sign up"} 
            textColor={Colors.primary} 
            onPress={()=> navigate('SignUp')} />
          <ColorButton 
            style={styles.loginButton} 
            title={"Log in"}  
            onPress={() => navigate('Login')} />
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
    height: 60,
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 12
  },

  loginButton: {
    height: 60,
    margin: 20,
    marginTop: 0,
    marginBottom: 31,
    backgroundColor: Colors.almostBlack,
  },
})
