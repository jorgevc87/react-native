import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */


import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MDrawer } from './src/navigator/DrawerNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <MDrawer />
    </NavigationContainer>
  )
}

export default App;
