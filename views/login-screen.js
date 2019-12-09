import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Screen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile')}
        />
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
