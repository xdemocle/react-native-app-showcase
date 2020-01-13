import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-page-swiper'
import WelcomeScreen from './welcome-screen'
import SignupScreen from './signup-screen'
import LoginScreen from './login-screen'

export default class Screen extends React.Component {
  state={
    swipeIndex: 1
  }

  slideTo = (newIndex) => {
    this.setState({ swipeIndex: newIndex })
  }

  onPageChange = (currentIndex) => {
    if (currentIndex === 1) {
      this.slideTo(1)
    }
  }

  render() {
    const { swipeIndex } = this.state

    return (
      <Swiper style={styles.wrapper} onPageChange={this.onPageChange} index={swipeIndex} activeDotColor="white">
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
  wrapper: {
  },

  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
