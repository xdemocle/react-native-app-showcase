import React, { useState } from 'react'
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { Divider, ListItem, SearchBar, Text } from 'react-native-elements'
import { contactsList, contactsFavouriteList } from '../common/Mock'
import theme from '../common/Theme'

const deviceWidth = Dimensions.get('window').width

export default function Screen({ navigation }) {
  const [searchText, setSearchText] = useState('')

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchBar
          containerStyle={styles.searchBar}
          placeholder="Search friends..."
          onChangeText={setSearchText}
          value={searchText}
        />
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          pagingEnabled={false}
        >
          <View>
            <Text h3 style={{ fontFamily: 'Montserrat-Bold', marginTop: 3 }}>
              Favorites
            </Text>

            <Divider />

            {contactsFavouriteList.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatarUrl } }}
                title={l.name}
                rightIcon={{ name: 'star', color: '#FFAE30', size: 32 }}
                bottomDivider
              />
            ))}

            <Text h3 style={{ fontFamily: 'Montserrat-Bold', marginTop: 30 }}>
              All Friends
            </Text>

            <Divider />

            {contactsList.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatarUrl } }}
                title={l.name}
                rightIcon={{ name: 'star', color: '#dddddd', size: 32 }}
                bottomDivider
              />
            ))}
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
    flexDirection: 'column',
    width: deviceWidth
  },
  scrollView: {
    width: deviceWidth,
    paddingLeft: '2%',
    paddingRight: '2%'
  }
})
