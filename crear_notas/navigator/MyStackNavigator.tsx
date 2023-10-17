import React from 'react'
import 'react-native-gesture-handler'
import { CreateNote } from '../screens/CreateNote'
import { DetailNote } from '../screens/DetailNote'
import { Notes } from '../screens/Notes'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Notas'
        component={Notes}
        options={{
          title: "NOTAS",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8B1874"
          },
          headerTintColor: "white"
        }} />

      <Stack.Screen
        name='Crear'
        component={CreateNote}
        options={{
          title: "CREAR NOTA",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8B1874"
          },
          headerTintColor: "white"
        }} />

      <Stack.Screen
        name='Detalle'
        component={DetailNote}
        options={{
          title: "DETALLES DE NOTAS",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8B1874"
          },
          headerTintColor: "white"
        }}
      />
    </Stack.Navigator>
  )
}