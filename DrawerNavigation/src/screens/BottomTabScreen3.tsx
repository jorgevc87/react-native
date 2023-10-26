import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const BottomTabScreen3 = () => {

    useEffect(() => {
        console.log('TabScreen3 effect')
    }, [])

    return (
        <View>
            <Text>
                Tab Screen 3
            </Text>
        </View>
    )
}
