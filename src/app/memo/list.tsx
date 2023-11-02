import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useEffect } from 'react'

import { router, useNavigation } from 'expo-router'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import LogOutButton from '../../components/logOutButton'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton onPress={handlePress}>
        <Feather name='plus' size={35} />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List
