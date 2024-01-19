import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../Navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { MovieFull } from '../interfaces/movieInterface';

const screenHeight = Dimensions.get('screen').height


interface Props extends StackScreenProps<RootStackParams, 'detail'> { }

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params as MovieFull|null
    const uri = "https://image.tmdb.org/t/p/w500" + movie?.poster_path

    const { isLoading, protagonistas, movieFull } = useMovieDetails(122)

    console.log({ isLoading })

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri: uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.marginConatiner}>
                <Text style={styles.subtitle}>
                    {movie.original_title}
                </Text>

                <Text style={styles.title}>
                    {movie.title}
                </Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movie={movie} cast={protagonistas} />
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        //backgroundColor: 'red',
        width: '100%',
        height: screenHeight * 0.7,
        //overflow:'hidden',

        //sombra del container
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImage: {
        flex: 1,
    },
    marginConatiner: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})