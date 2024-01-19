import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

interface Props {
    p: MovieFull;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ p, height = 420, width = 300 }: Props) => {

    const uri = "https://image.tmdb.org/t/p/w500" + p.poster_path

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('detail')}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
                //backgroundColor: 'red'
            }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flex: 1
    }
})