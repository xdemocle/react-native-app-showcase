import React from 'react'
import { withNavigation } from 'react-navigation'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import * as Font from 'expo-font'

class Screen extends React.Component {
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
    const { navigate } = this.props.navigation
    const { fontLoaded } = this.state

    if (!fontLoaded) {
      return <View style={styles.container}></View>
    }

    return (
      <View style={styles.container}>
        <View style={styles.jumbotron}>
          <Text style={styles.jumbotronFirst}>Welcome Back!</Text>
          <Text style={styles.jumbotronSecond}>Lets log you back in!</Text>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.form}>
            <TextInput
              autoFocus
              placeholder="Email"
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="username"
              style={styles.formInput}
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
            />

            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              autoCompleteType="password"
              textContentType="password"
              secureTextEntry
              style={styles.formInput}
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
            />

            <Button
              title="Log In"
              onPress={() => navigate('List')}
              titleStyle={styles.buttonText}
              buttonStyle={styles.button}
            />
          </View>
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
    flexDirection: 'column',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  jumbotron: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  jumbotronFirst: {
    width: '100%',
    fontFamily: 'Montserrat-Bold',
    fontSize: 37,
    textAlign: 'left',
    lineHeight: 60
  },
  jumbotronSecond: {
    width: '100%',
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    fontWeight: '600',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 30
  },
  formWrapper: {
    flex: 4,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'column'
  },
  formInput: {
    fontSize: 20,
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '400',
    color: '#aaa',
    backgroundColor: '#fff',
    padding: 13,
    marginBottom: 20,
    borderRadius: 20
  },
  button: {
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 18,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20
  },
  buttonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 21,
    color: '#111'
  }
})

export default withNavigation(Screen)
