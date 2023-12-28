import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';

interface Props {
    movie: MovieFull,
    cast: Cast;
}

export const MovieDetails = ({ movie, cast }: Props) => {
    return (
        <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 16, height: 16 }} />

                <Text>{movie.vote_average}</Text>

                <Text style={{ marginLeft: 5 }}>
                    - {movie.genre_ids.map(g => g).join(', ')}
                </Text>
            </View>

            {/* Historia */}
            <Text style={{
                fontSize: 23,
                marginTop: 10,
                fontWeight: 'bold',
                color: '#000'
            }}>
                Historia
            </Text>

            <Text style={{ fontSize: 16 }}>
                {movie.overview}
            </Text>

            {/* Presupuesto */}
            <Text style={{
                fontSize: 23,
                marginTop: 10,
                fontWeight: 'bold',
                color: '#000'
            }}>
                Presupuesto
            </Text>

            <Text style={{ fontSize: 16 }}>
                USD 200 000 000
            </Text>

            {/* cast */}
            <Text style={{
                fontSize: 23,
                marginTop: 10,
                fontWeight: 'bold',
                color: '#000'
            }}>
                Actores
            </Text>

            <FlatList
                data={cast}
                horizontal={true}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CastItem actor={item} />}
            />

        </View>
    )
}
