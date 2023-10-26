import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const BottomTabScreen2 = () => {

    useEffect(() => {
        console.log('TabScreen2 effect')
    }, [])

    return (
        <View>
            <Text>
                Tab Screen 2
            </Text>
        </View>
    )
}
