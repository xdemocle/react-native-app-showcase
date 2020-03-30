import React, { useState, useEffect } from 'react'
import {
  // Alert,
  // Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  // TextInput,
  // TouchableNativeFeedback,
  // TouchableOpacity,
  View
} from 'react-native'
import { SearchBar } from 'react-native-elements'

export default function Screen({ navigation }) {
  const [searchText, setSearchText] = useState('')

  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.searchBar}
        placeholder="Search friends..."
        onChangeText={setSearchText}
        value={searchText}
      />
      <View style={styles.body}>
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <Text>
              Bacon ipsum dolor amet pastrami pork chop andouille, shankle chuck
              jowl picanha landjaeger. Ground round meatball boudin jowl. Doner
              prosciutto ham hock cupim ribeye kielbasa pig chislic biltong
              fatback frankfurter shankle shoulder kevin chicken. Shoulder
              shankle ham picanha flank tri-tip boudin jowl pig drumstick
              fatback andouille buffalo kevin shank. Ball tip pastrami drumstick
              ham shoulder spare ribs pork chop meatball pancetta swine alcatra
              andouille ground round. Cow landjaeger rump pancetta shankle
              flank, swine sirloin tongue prosciutto. Beef pig biltong pancetta,
              cupim salami buffalo landjaeger picanha turducken spare ribs
              meatball. Bacon ipsum dolor amet pastrami pork chop andouille,
              shankle chuck jowl picanha landjaeger. Ground round meatball
              boudin jowl. Doner prosciutto ham hock cupim ribeye kielbasa pig
              chislic biltong fatback frankfurter shankle shoulder kevin
              chicken. Shoulder shankle ham picanha flank tri-tip boudin jowl
              pig drumstick fatback andouille buffalo kevin shank. Ball tip
              pastrami drumstick ham shoulder spare ribs pork chop meatball
              pancetta swine alcatra andouille ground round. Cow landjaeger rump
              pancetta shankle flank, swine sirloin tongue prosciutto. Beef pig
              biltong pancetta, cupim salami buffalo landjaeger picanha
              turducken spare ribs meatball. Bacon ipsum dolor amet pastrami
              pork chop andouille, shankle chuck jowl picanha landjaeger. Ground
              round meatball boudin jowl. Doner prosciutto ham hock cupim ribeye
              kielbasa pig chislic biltong fatback frankfurter shankle shoulder
              kevin chicken. Shoulder shankle ham picanha flank tri-tip boudin
              jowl pig drumstick fatback andouille buffalo kevin shank. Ball tip
              pastrami drumstick ham shoulder spare ribs pork chop meatball
              pancetta swine alcatra andouille ground round. Cow landjaeger rump
              pancetta shankle flank, swine sirloin tongue prosciutto. Beef pig
              biltong pancetta, cupim salami buffalo landjaeger picanha
              turducken spare ribs meatball. Bacon ipsum dolor amet pastrami
              pork chop andouille, shankle chuck jowl picanha landjaeger. Ground
              round meatball boudin jowl. Doner prosciutto ham hock cupim ribeye
              kielbasa pig chislic biltong fatback frankfurter shankle shoulder
              kevin chicken. Shoulder shankle ham picanha flank tri-tip boudin
              jowl pig drumstick fatback andouille buffalo kevin shank. Ball tip
              pastrami drumstick ham shoulder spare ribs pork chop meatball
              pancetta swine alcatra andouille ground round. Cow landjaeger rump
              pancetta shankle flank, swine sirloin tongue prosciutto. Beef pig
              biltong pancetta, cupim salami buffalo landjaeger picanha
              turducken spare ribs meatball.
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection: 'column',
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },
  // topbar: {
  //   flex: 1,
  //   backgroundColor: '#aaa',
  //   justifyContent: 'flex-start',
  //   alignItems: 'flex-start',
  //   width: '100%',
  //   margin: 0,
  //   padding: 0
  // },
  body: {
    backgroundColor: '#ddd',
    flex: 9,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  scrollView: {
    paddingLeft: '5%',
    paddingRight: '5%',
    flex: 1
  },
  searchBar: {
    width: '100%'
  }
})
