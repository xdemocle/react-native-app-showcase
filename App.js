import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import WelcomeScreen from './views/welcome-screen'
import HomeScreen from './views/home-screen'
import SignupScreen from './views/signup-screen'
import LoginScreen from './views/login-screen'

const RootStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Home: {
    screen: HomeScreen
  },
  Signup: {
    screen: SignupScreen
  },
  Login: {
    screen: LoginScreen
  }
},
{
  initialRouteName: 'Welcome',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#28CDFB'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

export default createAppContainer(RootStack)
