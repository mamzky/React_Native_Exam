import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'
import RegisterScreen from '../Containers/HomePage/RegisterScreen'
import PhotoScreen from '../Containers/HomePage/PhotoScreen'
import ChatScreen from '../Containers/HomePage/ChatScreen'
import ProfileScreen from '../Containers/HomePage/ProfileScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen, navigationOptions:{header:null} },
  RegisterScreen: { screen: RegisterScreen, navigationOptions: { title: 'Register' } },
  PhotoScreen: { screen: PhotoScreen, navigationOptions: { title: 'Photo' } },
  ChatScreen: { screen: ChatScreen, navigationOptions: { title: 'Chat' } },
  ProfileScreen: { screen: ProfileScreen, navigationOptions: { title: 'Profile' } }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'LaunchScreen',
  defaultNavigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: 'blue',
  }
})

export default createAppContainer(PrimaryNav)
