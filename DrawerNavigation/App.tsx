import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CustomMDrawer } from './src/navigator/CustomDrawerNavigator';
import { AuthProvider } from './src/context/authContext/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <CustomMDrawer />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
