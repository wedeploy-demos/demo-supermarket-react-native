import Cover from './pages/cover';
import Login from './pages/login';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ForgotPassword from './pages/forgot_password';
import SignUp from './pages/signup';

const DemoSupermarketRN = StackNavigator({
	Cover: { screen: Cover },
	Login: { screen: Login },
	ForgotPassword: { screen: ForgotPassword },
	SignUp: { screen: SignUp }
}, { headerMode: 'none' })

AppRegistry.registerComponent('DemoSupermarketRN', () => DemoSupermarketRN);