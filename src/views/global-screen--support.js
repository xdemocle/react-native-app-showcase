import React, { useState } from 'react'
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { Divider, Icon, ListItem, SearchBar, Text } from 'react-native-elements'
import { contactsRequestList, contactsLockedList } from '../common/Mock'
import theme from '../common/Theme'

const deviceWidth = Dimensions.get('window').width

export default function Screen({ navigation }) {
  const [searchText, setSearchText] = useState('')

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          pagingEnabled={false}
        >
          <View>
            <View style={styles.paragraph}>
              <Text>Support</Text>
              {/* <Divider /> */}
            </View>
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
  searchBar: {
    width: deviceWidth,
    marginLeft: 0,
    marginRight: 0
  },
  scrollView: {
    width: deviceWidth
  },
  paragraph: {
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  rightElement: {
    flexDirection: 'row'
  }
})
