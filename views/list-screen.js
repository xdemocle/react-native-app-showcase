import React, { useState, useEffect } from 'react'
import { cloneDeep } from 'lodash'
import {
  Alert,
  Platform,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Font from 'expo-font'
import { Icon, ThemeProvider } from 'react-native-elements'
import theme from '../common/theme'

import ContactsListScreen from './list-screen--contacts'
import ProfileScreen from './list-screen--profile'
import RequestsScreen from './list-screen--requests'

export default function Screen({ navigation }) {
  const buttons = ['Profile', 'Friends']
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [fontLoaded, setFontLoaded] = useState(false)

  const themeScreen = cloneDeep(theme)

  // Theming
  themeScreen.Divider.backgroundColor = theme.colors.primary
  themeScreen.Button.buttonStyle.backgroundColor = theme.colors.accent
  themeScreen.Button.titleStyle.color = theme.colors.white

  const Tab = createBottomTabNavigator()

  useEffect(() => {
    ;(async function() {
      await Font.loadAsync({
        'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
        'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
      })

      setFontLoaded(true)
    })()
  })

  if (!fontLoaded) {
    return <View style={styles.container}></View>
  }

  const tabBarIconFunc = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName

      if (route.name === 'Requests') {
        iconName = focused ? 'results-demographics' : 'results-demographics'
      } else if (route.name === 'Profile') {
        iconName = focused ? 'torso' : 'torso'
      } else if (route.name === 'Contacts') {
        iconName = focused ? 'torsos-all' : 'torsos-all'
      } else if (route.name === 'Settings') {
        iconName = focused ? 'widget' : 'widget'
      }

      // You can return any component that you like here!
      return (
        <Icon type="foundation" name={iconName} size={size} color={color} />
      )
    }
  })

  return (
    <ThemeProvider theme={themeScreen}>
      <Tab.Navigator
        screenOptions={tabBarIconFunc}
        tabBarOptions={{
          activeTintColor: theme.colors.accent,
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Contacts" component={ContactsListScreen} />
        <Tab.Screen name="Requests" component={RequestsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // // flexDirection: 'column',
    // // width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 0,
    // padding: 0
  }
})
