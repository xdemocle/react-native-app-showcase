import { CommonActions } from '@react-navigation/native'

export const resetLoggedNavigation = navigation => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: 'List' }]
    })
  )
}

export const resetUnloggedNavigation = navigation => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: 'Home' }]
    })
  )
}
