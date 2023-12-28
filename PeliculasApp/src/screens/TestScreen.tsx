import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { HomeScreen } from './HomeScreen'

export const TestScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <Text style={{
                width: 120,
                height: 40,
                flex: 1
            }}>
                SCREEN DE TEST
            </Text>

            <TouchableOpacity
                onPress={
                    () => navigation.navigate('home')
                }
                activeOpacity={0.8}
                style={{
                    width: 100,
                    height: 50
                }}>
                <Text>Ir al home</Text>
            </TouchableOpacity>
        </View>
    )
}