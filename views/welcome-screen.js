import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Screen extends React.Component {
  static navigationOptions = {
    title: 'Knock'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={styles.jumbotron}>
          <Text style={styles.jumbotron.first}>knock</Text>
          <Text style={styles.jumbotron.second}>your virtual doorbell</Text>
        </View>
        <View style={styles.actions}>
          <Button
            title="Log In"
            onPress={() => navigate('Login')}
            style={[styles.buttons, styles.buttonLeft]}
          />
          <Button
            title="Sign Up"
            onPress={() => navigate('Signup')}
            style={[styles.buttons, styles.buttonRight]}
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
    backgroundColor: '#64D2FF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  jumbotron: {
    flex: 4,
    width: '100%',
    first: {
      fontSize: 30
    },
    second: {
      fontSize: 16
    }
  },
  actions: {
    flex: 2,
    width: '100%'
  },
  buttons: {
    width: '30%'
  },
  buttonLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    color: '#000'
  },
  buttonRight: {
    alignSelf: 'flex-end'
  }
})
