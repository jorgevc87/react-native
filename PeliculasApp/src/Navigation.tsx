import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from './screens/HomeScreen'
import { DetailScreen } from './screens/DetailScreen'
import { MovieFull } from './interfaces/movieInterface'
import { TestScreen } from './screens/TestScreen'

//Para definir los objetos/parametros que recibe cada screen se hace mediante un
//Type

export type RootStackParams = {
    home: undefined,
    detail: MovieFull
}

//Creacion del stacknavigator y se le asigna el type creado
const Stack = createStackNavigator<RootStackParams>()

export const MyStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='detail'
            screenOptions={{
                headerShown: true,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}>

            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='detail' component={DetailScreen} />
        </Stack.Navigator>
    )
}