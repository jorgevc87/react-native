import 'react-native-gesture-handler'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/navigation/Navigator'
import { Animation101Screen } from './src/screens/Animation101Screen'

const App = () => {
  return (
    <NavigationContainer >
      <Navigator />
      {/* <Animation101Screen/> */}
    </NavigationContainer>
  )
}

export default App