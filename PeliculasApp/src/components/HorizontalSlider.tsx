import React from 'react'
import { MovieFull } from '../interfaces/movieInterface'
import { FlatList, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'

interface Props {
    title?: String,
    movies: MovieFull[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        < View style={{height: (title) ? 260 : 220 }
        }>
            {
                title && 
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                    {title}
                </Text>
            }

            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster p={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View >
    )
}
