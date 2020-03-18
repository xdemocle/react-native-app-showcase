import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import Swiper from 'react-native-page-swiper'
import * as Font from 'expo-font'
import theme from '../constants/theme'
import WelcomeScreen from './home-screen--welcome'
import SignupScreen from './home-screen--signup'
import LoginScreen from './home-screen--login'

function Screen({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false)
  const [swipeIndex, setSwipeIndex] = useState(1)

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

  const slideTo = newIndex => {
    setSwipeIndex(newIndex)
  }

  const onPageChange = currentIndex => {
    if (currentIndex === 1) {
      slideTo(1)
    }
  }

  if (!fontLoaded) {
    return <View style={styles.slide}></View>
  }

  return (
    <ThemeProvider theme={theme}>
      <Swiper
        style={styles.wrapper}
        onPageChange={onPageChange}
        index={swipeIndex}
        activeDotColor="white"
        threshold={500}
      >
        <View style={styles.slide}>
          <LoginScreen slideTo={slideTo} />
        </View>

        <View style={styles.slide}>
          <WelcomeScreen slideTo={slideTo} />
        </View>

        <View style={styles.slide}>
          <SignupScreen slideTo={slideTo} />
        </View>
      </Swiper>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  wrapper: {},

  slide: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Screen
