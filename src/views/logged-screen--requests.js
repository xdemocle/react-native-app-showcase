import React, { useState, useEffect } from 'react'
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { Divider, Icon, ListItem, SearchBar, Text } from 'react-native-elements'
import { contactsRequestList, contactsLockedList } from '../common/mock'
import theme from '../common/theme'

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
            <SearchBar
              searchIcon={<Icon type="foundation" color="grey" name="plus" />}
              containerStyle={styles.searchBar}
              placeholder="Add new friend"
              onChangeText={setSearchText}
              value={searchText}
            />

            <View style={styles.paragraph}>
              <Text h3 style={{ fontFamily: 'Montserrat-Bold', marginTop: 3 }}>
                Requests
              </Text>

              <Divider />

              {contactsRequestList.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatarUrl } }}
                  title={l.name}
                  // rightIcon={{
                  //   name: 'x',
                  //   type: 'foundation',
                  //   color: '#dddddd',
                  //   size: 32
                  // }}
                  rightElement={
                    <View style={styles.rightElement}>
                      <Icon
                        name="x"
                        type="foundation"
                        color="#dddddd"
                        size={32}
                        iconStyle={{ marginRight: 10 }}
                        onPress={() => console.log('x')}
                      />
                      <Icon
                        name="check"
                        type="foundation"
                        color="#4ede67"
                        size={32}
                        onPress={() => console.log('check')}
                      />
                    </View>
                  }
                  bottomDivider
                />
              ))}
            </View>

            <View style={styles.paragraph}>
              <Text h3 style={{ fontFamily: 'Montserrat-Bold', marginTop: 30 }}>
                Blocked
              </Text>

              <Divider />

              {contactsLockedList.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatarUrl } }}
                  title={l.name}
                  rightIcon={{
                    name: 'x',
                    type: 'foundation',
                    color: '#dddddd',
                    size: 32
                  }}
                  bottomDivider
                />
              ))}
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
