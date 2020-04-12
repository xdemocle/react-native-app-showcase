import React, { useState } from 'react'
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { Avatar, Button, Divider, Text } from 'react-native-elements'
import { resetUnloggedNavigation } from '../common/Utility'
import theme from '../common/Theme'
import { mainProfile } from '../common/Mock'

const deviceWidth = Dimensions.get('window').width

export default function Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          pagingEnabled={false}
        >
          <View style={styles.body}>
            <View style={styles.userProfile}>
              <Avatar
                size={128}
                rounded
                source={{
                  uri: mainProfile.avatarUrl
                }}
                showEditButton
                editButton={{
                  color: '#ffffff',
                  underlayColor: theme.colors.accent
                }}
                onEditPress={() => navigation.navigate('ProfileEdit')}
              />
              <Text h3 style={styles.userProfileNickname}>
                {mainProfile.nickname}
              </Text>
              <Text h4 style={styles.userProfileName}>
                {mainProfile.name}
              </Text>
            </View>

            <Divider />

            <Button
              title="About"
              onPress={() => navigation.navigate('About')}
            />

            <Divider />

            <Button
              title="Support"
              onPress={() => navigation.navigate('Support')}
            />

            <Divider />

            <Button
              title="Log Out"
              onPress={() => resetUnloggedNavigation(navigation)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.containerBackgroundColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0
  },
  scrollView: {
    width: deviceWidth,
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  body: {
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  userProfile: {
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '7%'
  },
  userProfileNickname: {
    fontFamily: 'Montserrat-ExtraBold',
    color: theme.colors.accent,
    textAlign: 'center'
  },
  userProfileName: {
    fontFamily: 'Montserrat-Bold',
    color: '#aaaaaa',
    textAlign: 'center'
  }
})
