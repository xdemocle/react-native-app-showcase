import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../common/theme'

const Screen = ({ slideTo }) => {
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
        <Button
          title="Sign Up"
          onPress={() => slideTo(2)}
          containerStyle={styles.viewButtonRight}
          buttonStyle={styles.buttonRight}
          iconRight
          icon={
            <Icon name="arrow-right" size={23} color={colors.primary} raised />
          }
        />
        <Button
          title="Log In"
          onPress={() => slideTo(0)}
          containerStyle={styles.viewButtonLeft}
          buttonStyle={styles.buttonLeft}
          icon={
            <Icon name="arrow-left" size={23} color={colors.primary} raised />
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  jumbotron: {
    flex: 3,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  jumbotronImage: {
    width: 192,
    height: 192
  },
  jumbotronFirst: {
    marginTop: -30,
    fontFamily: 'Montserrat-Bold',
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 60
  },
  jumbotronSecond: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 25,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 30
  },
  actions: {
    flex: 2,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: '13%'
  },
  viewButtonLeft: {
    marginTop: 10
  },
  viewButtonRight: {
    marginTop: 40
  },
  buttonLeft: {
    alignSelf: 'flex-start',
    minWidth: '45%',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  buttonRight: {
    alignSelf: 'flex-end',
    minWidth: '45%',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
})

export default Screen
