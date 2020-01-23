import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-page-swiper'
import * as Font from 'expo-font'
import WelcomeScreen from './welcome-screen'
import SignupScreen from './signup-screen'
import LoginScreen from './login-screen'

export default class Screen extends React.Component {
  state = {
    fontLoaded: false,
    swipeIndex: 1
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
      'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
      'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
    })

    this.setState({ fontLoaded: true })
  }

  slideTo = newIndex => {
    this.setState({ swipeIndex: newIndex })
  }

  onPageChange = currentIndex => {
    if (currentIndex === 1) {
      this.slideTo(1)
    }
  }

  render() {
    const { fontLoaded, swipeIndex } = this.state

    return (
      <Swiper
        style={styles.wrapper}
        onPageChange={this.onPageChange}
        index={swipeIndex}
        activeDotColor="white"
        threshold={500}
      >
        <View style={styles.container}>
          <LoginScreen slideTo={this.slideTo} />
        </View>

        <View style={styles.container}>
          <WelcomeScreen slideTo={this.slideTo} />
        </View>

        <View style={styles.container}>
          <SignupScreen slideTo={this.slideTo} />
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},

  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
