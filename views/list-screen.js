import React from 'react'
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native'

export default class Screen extends React.Component {
  // static navigationOptions = {
  //   title: 'List'
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.jumbotron}>
          <Text style={styles.jumbotronFirst}>List</Text>
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
  }
})
