import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import Swiper from 'react-native-page-swiper'
import * as Font from 'expo-font'
import theme, { colors } from '../common/theme'
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

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.slide}>
              <SignupScreen slideTo={slideTo} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Swiper>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  wrapper: {},

  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: colors.primary
  },

  scrollView: {
    flex: 1,
    width: '100%',
    minHeight: '100%',
    height: '100%'
  },

  slide: {
    flex: 1,
    width: '100%',
    minHeight: '100%'
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})

export default Screen
