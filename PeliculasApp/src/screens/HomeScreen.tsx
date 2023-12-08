import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View, Dimensions, FlatList, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Carousel from 'react-native-snap-carousel'

const { width } = Dimensions.get('window')

export const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

    //console.log(peliculasEnCine[3]?.title)

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                {/*<MoviePoster
                movie={peliculasEnCine[6]}
            />*/}

                <View style={{ height: 440, }}>

                    {/* LIBRERIA EXTERNA: react-native-snap-carousel*/}
                    <Carousel
                        data={peliculasEnCine}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={width}
                        itemWidth={300}
                    />
                </View>

                {/* Peliculas populares */}
                <View style={{ backgroundColor: 'red', height: 250 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                        En cine
                    </Text>

                    <FlatList
                        data={peliculasEnCine}
                        renderItem={({ item }: any) => (
                            <MoviePoster movie={item} width={140} height={200} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {/* Peliculas populares */}
                <View style={{ backgroundColor: 'red', height: 250 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                        En cine
                    </Text>

                    <FlatList
                        data={peliculasEnCine}
                        renderItem={({ item }: any) => (
                            <MoviePoster movie={item} width={140} height={200} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

        </ScrollView>
    )
}
