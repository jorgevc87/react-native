import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from './screens/HomeScreen'
import { DetailScreen } from './screens/DetailScreen'
import { Movie } from './interfaces/movieInterface'

//Para definir los objetos/parametros que recibe cada screen se hace mediante un
//Type

export type RootStackParams = {
    home: undefined,
    detail: Movie
}

//Creacion del stacknavigator y se le asigna el type creado
const Stack = createStackNavigator<RootStackParams>()

export const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}>
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='detail' component={DetailScreen} />
        </Stack.Navigator>
    )
}