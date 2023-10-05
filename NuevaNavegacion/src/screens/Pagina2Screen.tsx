import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/AppTheme'

export const Pagina2Screen = () => {

    const navigator = useNavigation()

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Atras'
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina2Screen
            </Text>

            <Button
                title='Ir a Pagina 3'
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
