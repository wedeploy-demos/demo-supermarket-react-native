import Cover from './pages/cover'
import Login from './pages/login'
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation'

const DemoSupermarketRN = StackNavigator({
	Cover: { screen: Cover },
	Login: { screen: Login }
}, { headerMode: 'none' })

AppRegistry.registerComponent('DemoSupermarketRN', () => DemoSupermarketRN);