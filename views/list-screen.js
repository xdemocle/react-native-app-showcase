import React, { useState, useEffect } from 'react'
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
import * as Font from 'expo-font'
import { ThemeProvider } from 'react-native-elements'
import theme from '../constants/theme'

function Screen({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    ;(async function() {
      await Font.loadAsync({
        'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
        'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
      })

      setFontLoaded(true)
    })()
  })

  if (!fontLoaded) {
    return <View style={styles.container}></View>
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <View style={styles.jumbotron}>
          <Text style={styles.jumbotronFirst}>List</Text>
        </View>
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    // backgroundColor: '#28CDFB',
    // flexDirection: 'column',
    // paddingLeft: '5%',
    // paddingRight: '5%'

    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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

export default Screen
