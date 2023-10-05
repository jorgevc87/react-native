import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <TouchableOpacity
                onPress={
                    () => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })
                } >
                <Text>Pedro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={
                    () => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Jose'
                    })
                } >
                <Text>Jose</Text>
            </TouchableOpacity>
            <Button
                title='Ir a Persona'
                onPress={
                    () => navigation.navigate('PersonaScreen')
                } />
        </View>
    )
}
