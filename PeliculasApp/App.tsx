import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/Navigation'
import { FadeScreen } from './src/screens/FadeScreen'
import { GradientBackground } from './src/components/GradientBackground'

const App = () => {

  return (
    <NavigationContainer>
      <MyStack />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}

export default App