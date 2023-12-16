import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../Navigation'
//import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'detail'> { }

const screenHeight = Dimensions.get('screen').height

export const DetailScreen = ({ navigation, route }: Props) => {

    const movie = route.params
    const uri = "https://image.tmdb.org/t/p/w500" + movie.poster_path

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

            <View style={styles.marginConatiner}>
{/*                 <Icon
                    name="star-outline"
                    color="grey"
                    size={28}
                /> */}
            </View>
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