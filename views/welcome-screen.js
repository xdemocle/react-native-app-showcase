import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'

export default class Screen extends React.Component {
  // static navigationOptions = {
  //   title: 'Knock',
  //   headerStyle: {
  //     display: 'none'
  //   },
  // }

  render() {
    const { slideTo } = this.props

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
          <View style={[styles.viewButton, styles.viewRight]}>
            {Platform.OS === 'android' ? (
              <TouchableNativeFeedback
                onPress={() => slideTo(2)}
                background={TouchableNativeFeedback.SelectableBackground()}
              >
                <View style={[styles.button, styles.buttonRight]}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </View>
              </TouchableNativeFeedback>
            ) : (
              <TouchableOpacity
                style={[styles.button, styles.buttonRight]}
                onPress={() => slideTo(2)}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={[styles.viewButton, styles.viewLeft]}>
            {Platform.OS === 'android' ? (
              <TouchableNativeFeedback
                onPress={() => slideTo(0)}
                background={TouchableNativeFeedback.SelectableBackground()}
              >
                <View style={[styles.button, styles.buttonLeft]}>
                  <Text style={styles.buttonText}>Log In</Text>
                </View>
              </TouchableNativeFeedback>
            ) : (
              <TouchableOpacity
                style={[styles.button, styles.buttonLeft]}
                onPress={() => slideTo(0)}
              >
                <Text style={styles.buttonText}>Log In</Text>
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
    flexDirection: 'column'
  },
  jumbotron: {
    flex: 4,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  jumbotronImage: {
    width: 192,
    height: 192
  },
  jumbotronFirst: {
    fontSize: 60,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 60
  },
  jumbotronSecond: {
    fontSize: 30,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 30
  },
  actions: {
    flex: 2,
    width: '100%',
    flexDirection: 'column'
  },
  viewButton: {
    width: '42%'
  },
  viewLeft: {
    alignSelf: 'flex-start',
    marginTop: 20
  },
  viewRight: {
    alignSelf: 'flex-end',
    marginTop: 60
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 13,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '300'
  },
  buttonLeft: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  buttonRight: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
})
