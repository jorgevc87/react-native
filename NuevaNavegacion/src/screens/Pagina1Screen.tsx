import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    //props son las properties del stacknavigator
    console.log(navigation)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button
                title='Ir a pagina 2'
                onPress={
                    () => navigation.navigate('Pagina2Screen')
                } />

            <Button
                title='Ir a Persona Screen'
                onPress={
                    () => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })
                } />

        </View>
    )
}
