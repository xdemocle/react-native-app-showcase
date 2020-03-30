import React from 'react'
import { withNavigation } from '@react-navigation/compat'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Button, Divider, Input } from 'react-native-elements'
// import { components } from '../common/theme'
import { resetLoggedNavigation } from '../common/utility'

function Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.jumbotron}>
        <Text style={styles.jumbotronFirst}>Welcome Back!</Text>
        <Text style={styles.jumbotronSecond}>Lets log you back in!</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="username"
            // errorMessage="The jbdskjbsa asljklda."
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />

          <Input
            placeholder="Password"
            autoCapitalize="none"
            autoCompleteType="password"
            textContentType="password"
            secureTextEntry
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
          />

          <Divider />

          <Button
            title="Log In"
            onPress={() => resetLoggedNavigation(navigation)}
          />
        </View>
      </View>
    </View>
  )
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
    justifyContent: 'center',
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
    flex: 3,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'column'
  }
})

export default withNavigation(Screen)
