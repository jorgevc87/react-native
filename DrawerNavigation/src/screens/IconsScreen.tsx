import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

import Icon from 'react-native-vector-icons/Ionicons';

export const IconsScreen = () => {

    useEffect(() => {
        console.log('IconsScreen effect')
    }, [])

    return (
        <View style={styles.menuContainer}>
            <Text style={styles.title}>
                Iconos
            </Text>

            <Text>
                <Icon name="airplane-outline" size={30} color="#900" />
                <Icon name="add-circle-outline" size={30} color="#900" />
                <Icon name="american-football-outline" size={60} color="#200" />
                <Icon name="bicycle-outline" size={80} color="#200" />
            </Text>
        </View>
    )
}
