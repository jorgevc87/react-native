import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View, Dimensions, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
//import { MoviePoster } from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HorizontalSlider } from '../components/HorizontalSlider'
//import Carousel from 'react-native-snap-carousel'
import { MovieFull } from '../interfaces/movieInterface'

const windowWidth = Dimensions.get('window')

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upConming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

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

                <View style={{
                    height: 440
                }}>

                    {/* LIBRERIA EXTERNA: react-native-snap-carousel
                    <Carousel
                        data={nowPlaying!}
                        renderItem={(item: any) => <MoviePoster p={item as MovieFull} height={420} width={300} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                    */}
                </View>

                <HorizontalSlider movies={popular} title={"Populares"} />
                <HorizontalSlider movies={topRated} title={"Top Rated"} />
                <HorizontalSlider movies={upConming} title={"Upcoming"} />

            </View>

        </ScrollView>
    )
}
