import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CustomMDrawer} from './src/navigator/CustomDrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <CustomMDrawer />
    </NavigationContainer>
  );
};

export default App;
