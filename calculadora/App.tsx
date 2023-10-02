import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/themes/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor='black'
        barStyle='dark-content' />

      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;