import React, { useState, useEffect } from 'react'
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import * as Font from 'expo-font'
import { ThemeProvider } from 'react-native-elements'
import theme from '../common/theme'

import HomeListScreen from './list-screen--home'
import ProfileScreen from './list-screen--profile'
import FriendsScreen from './list-screen--friends'

export default function Screen({ navigation }) {
  const buttons = ['Profile', 'Friends']
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [fontLoaded, setFontLoaded] = useState(false)

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

  return (
    <ThemeProvider theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user'
            } else if (route.name === 'Friends') {
              iconName = focused ? 'users' : 'users'
            }

            // You can return any component that you like here!
            return (
              <Icon
                type="font-awesome"
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={HomeListScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Friends" component={FriendsScreen} />
      </Tab.Navigator>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection: 'column',
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },
  // topbar: {
  //   flex: 1,
  //   backgroundColor: '#aaa',
  //   justifyContent: 'flex-start',
  //   alignItems: 'flex-start',
  //   width: '100%',
  //   margin: 0,
  //   padding: 0
  // },
  // topbarContainerButtons: {
  //   flex: 1,
  //   borderWidth: 0,
  //   margin: 0,
  //   padding: 0
  // },
  // topbarButtons: {
  //   margin: 0,
  //   padding: 0
  // },
  body: {
    // paddingLeft: '5%',
    // paddingRight: '5%',
    backgroundColor: '#ddd',
    flex: 9,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchBar: {
    width: '100%'
  }
})
