import React, { useEffect } from 'react'
import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

//import Carousel from 'react-native-snap-carousel'
import { HorizontalSlider } from '../components/HorizontalSlider'
import Carousel from 'react-native-snap-carousel'
import { GradientBackground } from '../components/GradientBackground'
import { MoviePoster } from '../components/MoviePoster'

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
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>

                    <View style={{
                        height: 440
                    }}>

                        {/* LIBRERIA EXTERNA: react-native-snap-carousel*/}
                        {/* <Carousel
                            data={popular}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            itemWidth={300}
                            sliderWidth={windowWidth}
                            inactiveSlideOpacity={0.9}
                        /> */}
                    </View>

                    <HorizontalSlider movies={popular} title={"Populares"} />
                    <HorizontalSlider movies={topRated} title={"Top Rated"} />
                    <HorizontalSlider movies={upConming} title={"Upcoming"} />

                </View>

            </ScrollView>
        </GradientBackground>
    )
}
