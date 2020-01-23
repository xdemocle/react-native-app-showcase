import React from 'react'
import { withNavigation } from 'react-navigation'

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native'

class Screen extends React.Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={styles.jumbotron}>
          <Text style={styles.jumbotronFirst}>Welcome Back!</Text>
          <Text style={styles.jumbotronSecond}>Lets log you back in!</Text>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.form}>
            <TextInput
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
            {Platform.OS === 'android' ? (
              <TouchableNativeFeedback
                onPress={() => navigate('List')}
                background={TouchableNativeFeedback.SelectableBackground()}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Log In</Text>
                </View>
              </TouchableNativeFeedback>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('List')}
              >
                <Text>Log In</Text>
              </TouchableOpacity>
            )}
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
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'left',
    lineHeight: 60
  },
  jumbotronSecond: {
    width: '100%',
    fontSize: 30,
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
    borderRadius: 20
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '700'
  }
})

export default withNavigation(Screen)
