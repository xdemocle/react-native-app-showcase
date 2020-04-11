import 'react-native-gesture-handler'
import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import theme from './common/theme'
import WelcomeScreen from './views/welcome-screen'
import LoggedScreen from './views/logged-screen'
import ProfileEditScreen from './views/logged-screen--profile-edit.js'
import SignupConfirmationScreen from './views/welcome-screen--signup-confirmation.js'
import AboutScreen from './views/global-screen--about.js'
import SupportScreen from './views/global-screen--support.js'

const screenOptions = {
  headerStyle: {
    backgroundColor: theme.colors.primary
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SignupConfirmation"
          component={SignupConfirmationScreen}
          options={{
            headerShown: true,
            headerTitle: 'Knock: Confirm Registration'
          }}
        />
        <Stack.Screen
          name="Logged"
          component={LoggedScreen}
          options={{
            headerShown: true,
            headerTitle: 'Knock'
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={{
            headerShown: true,
            headerTitle: 'Edit Profile'
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerShown: true,
            headerTitle: 'About Knock'
          }}
        />
        <Stack.Screen
          name="Support"
          component={SupportScreen}
          options={{
            headerShown: true,
            headerTitle: "Knock's Support"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
