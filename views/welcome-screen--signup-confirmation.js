import React, { useState } from 'react'
import { withNavigation } from '@react-navigation/compat'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Button, Divider, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import theme from '../common/theme'
import { resetLoggedNavigation } from '../common/utility'

function Screen({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000))
  const [show, setShow] = useState(false)

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios')
    setDate(selectedDate || date)
  }

  return (
    <View style={styles.container}>
      <View style={styles.jumbotron}>
        <Text style={styles.jumbotronFirst}>Yay!</Text>
        <Text style={styles.jumbotronSecond}>Confirm your account!</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.form}>
          <View style={styles.row}>
            <Text>
              This passage will be bypassed by an email confirmation link.
            </Text>
          </View>
          <View style={styles.row}>
            <Text>And will only show a message saying: OPEN YOUR EMAIL!</Text>
          </View>

          <Divider />

          <Button
            title="SignupConfirmation"
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
    backgroundColor: theme.colors.primary,
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
    fontSize: 53,
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
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 80
  },
  form: {
    width: '100%',
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  inputWrap: {
    flex: 1
  },
  inputWrapTwo: {
    flex: 2
  },
  inputWrapLeft: {
    marginRight: 4
  },
  inputWrapRight: {
    marginLeft: 4
  }
})

export default withNavigation(Screen)
