import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { resetUnloggedNavigation } from '../common/utility'

export default function Screen({ navigation }) {
  return (
    <View>
      <Button
        title="Log Out"
        onPress={() => resetUnloggedNavigation(navigation)}
      />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // flexDirection: 'column',
//     // width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 0,
//     padding: 0
//   },
//   topbar: {
//     flex: 1,
//     backgroundColor: '#aaa',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     width: '100%',
//     margin: 0,
//     padding: 0
//   },
//   body: {
//     // paddingLeft: '5%',
//     // paddingRight: '5%',
//     backgroundColor: '#ddd',
//     flex: 9,
//     width: '100%',
//     justifyContent: 'flex-start',
//     alignItems: 'center'
//   },
//   searchBar: {
//     width: '100%'
//   }
// })
