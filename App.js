import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './views/home-screen'
import ListScreen from './views/list-screen'

const screenOptions = {
  headerStyle: {
    backgroundColor: '#28CDFB'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const stackScreenOptions = {
  headerShown: false
}

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={stackScreenOptions}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={stackScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
