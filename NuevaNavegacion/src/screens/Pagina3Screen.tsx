import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props extends StackScreenProps<any, any> { };

export const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina3Screen
            </Text>

            <Button
                title='Ir a la pagina 1'
                onPress={() => { navigation.popToTop() }}
            />
        </View>
    )
}
