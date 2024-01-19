import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/Navigation'
import 'react-native-gesture-handler'

const App = () => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App