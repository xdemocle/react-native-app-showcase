import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Screen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
