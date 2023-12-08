import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { View } from 'react-native'

interface Props {
    title?: String,
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View/>
    )
}
