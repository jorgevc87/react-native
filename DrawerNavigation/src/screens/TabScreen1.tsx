import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const TabScreen1 = () => {

    useEffect(() => {
        console.log('TabScreen1 effect')
    }, [])

    return (
        <View>
            <Text>
                Tab Screen 1
            </Text>
        </View>
    )
}
