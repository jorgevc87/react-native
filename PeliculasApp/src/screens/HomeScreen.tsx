import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'

export const HomeScreen = () => {

    const { peliculasEnCine } = useMovies()

    console.log(peliculasEnCine[1].title)

    return (
        <View>
            <Text>
                Home Screen
            </Text>
        </View>
    )
}
