import 'react-native-gesture-handler'
import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import theme from './common/theme'
import HomeScreen from './views/home-screen'
import ListScreen from './views/list-screen'
import ProfileEditScreen from './views/list-screen--profile-edit.js'

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
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
