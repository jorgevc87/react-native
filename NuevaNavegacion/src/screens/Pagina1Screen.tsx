import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    //props son las properties del stacknavigator
    useEffect(() => {

navigation.setOptions({
    headerLeft: () => (
        <Button
        title='Menú'
        onPress={() => {}}
        />
    )
})

    })

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button
                title='Ir a pagina 2'
                onPress={
                    () => navigation.navigate('Pagina2Screen')
                } />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande, //Se debe desestructurar el estilo para poder sobreescribir el backgroundColor en la siguiente linea
                        backgroundColor: '#5856D6'
                    }}
                    onPress={
                        () => navigation.navigate('PersonaScreen', {
                            id: 1,
                            nombre: 'Pedro'
                        })
                    } >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botonGrande}
                    onPress={
                        () => navigation.navigate('PersonaScreen', {
                            id: 2,
                            nombre: 'Jose'
                        })
                    } >
                    <Text style={styles.botonGrandeTexto}>Jose</Text>
                </TouchableOpacity>
            </View>
            
            <Button
                title='Ir a Persona'
                onPress={
                    () => navigation.navigate('PersonaScreen', {
                        id: 3,
                        nombre: 'Lucia'
                    })
                } />
        </View>
    )
}
