import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import * as Font from 'expo-font'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Screen extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      // 'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      // 'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
      // 'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
      // 'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
      // 'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf')
      // 'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    const { slideTo } = this.props
    const { fontLoaded } = this.state

    if (!fontLoaded) {
      return <View style={styles.container}></View>
    }

    return (
      <View style={styles.container}>
        <View style={styles.jumbotron}>
          <Image
            style={styles.jumbotronImage}
            source={require('../assets/icon.png')}
          />
          <Text style={styles.jumbotronFirst}>knock</Text>
          <Text style={styles.jumbotronSecond}>your virtual doorbell</Text>
        </View>
        <View style={styles.actions}>
          <Button
            title="Sign Up"
            onPress={() => slideTo(2)}
            titleStyle={styles.buttonText}
            buttonStyle={[styles.button, styles.buttonRight]}
            containerStyle={[styles.viewButton, styles.viewRight]}
            iconRight
            icon={<Icon name="arrow-right" size={23} color="#28CDFB" raised />}
          />
          <Button
            title="Log In"
            onPress={() => slideTo(0)}
            titleStyle={styles.buttonText}
            buttonStyle={[styles.button, styles.buttonLeft]}
            containerStyle={[styles.viewButton, styles.viewLeft]}
            icon={<Icon name="arrow-left" size={23} color="#28CDFB" raised />}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#28CDFB',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  jumbotron: {
    flex: 3,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  jumbotronImage: {
    width: 192,
    height: 192
  },
  jumbotronFirst: {
    marginTop: -30,
    fontFamily: 'Montserrat-Bold',
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 60
  },
  jumbotronSecond: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 25,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 30
  },
  actions: {
    flex: 2,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: '13%'
  },
  viewButton: {
    width: '45%'
  },
  viewLeft: {
    alignSelf: 'flex-start',
    marginTop: 10
  },
  viewRight: {
    alignSelf: 'flex-end',
    marginTop: 40
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 13,
    borderRadius: 20
  },
  buttonLeft: {
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  buttonRight: {
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  buttonText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 25,
    color: '#111',
    paddingLeft: 10,
    paddingRight: 10
  }
})
