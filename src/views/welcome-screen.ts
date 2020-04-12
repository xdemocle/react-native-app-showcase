import React, { useState /*, useEffect*/ } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import Swiper from 'react-native-page-swiper'
import theme from '../common/Theme'
import MainScreen from './welcome-screen--main'
import SignupScreen from './welcome-screen--signup'
import LoginScreen from './welcome-screen--login'

const styles = StyleSheet.create({
  wrapper: {},

  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.primary
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

export default () => {
  const [swipeIndex, setSwipeIndex] = useState(1)

  // useEffect(() => {
  //   ;(async function () {
  //     await Font.loadAsync({})
  //     setFontLoaded(true)
  //   })()
  // })

  const slideTo = (newIndex: React.SetStateAction<number>) => {
    setSwipeIndex(newIndex)
  }

  const onPageChange = (currentIndex: number) => {
    if (currentIndex === 1) {
      slideTo(1)
    }
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
          <MainScreen slideTo={slideTo} />
        </View>

        <View style={styles.slide}>
          <SignupScreen slideTo={slideTo} />
        </View>
      </Swiper>
    </ThemeProvider>
  )
}
