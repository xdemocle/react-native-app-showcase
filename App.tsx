import 'react-native-gesture-handler'
import * as React from 'react'
import { useState } from 'react'
import { StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import theme from './src/common/Theme'
import WelcomeScreen from './src/views/welcome-screen'
import LoggedScreen from './src/views/logged-screen'
import ProfileEditScreen from './src/views/logged-screen--profile-edit'
import SignupConfirmationScreen from './src/views/welcome-screen--signup-confirmation'
import AboutScreen from './src/views/global-screen--about'
import SupportScreen from './src/views/global-screen--support'

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

export default () => {
  const [isReady, setIsReady] = useState(false)

  const _cacheResourcesAsync = async () => {
    const images = [require('./src/assets/icon.png')]
    const cacheFontAssets = await Font.loadAsync({
      'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-ExtraBold': require('./src/assets/fonts/Montserrat-ExtraBold.ttf'),
      'Montserrat-ExtraLight': require('./src/assets/fonts/Montserrat-ExtraLight.ttf'),
      'Montserrat-Italic': require('./src/assets/fonts/Montserrat-Italic.ttf'),
      'Montserrat-Light': require('./src/assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf')
    })

    const cacheImageAssets = images.map((image) => {
      return Asset.fromModule(image).downloadAsync()
    })

    await Promise.all(cacheImageAssets, cacheFontAssets)
  }

  if (!isReady) {
    return (
      <AppLoading
        autoHideSplash
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }

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
