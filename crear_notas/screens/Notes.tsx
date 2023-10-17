import React, { useEffect } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { AppStyle } from '../styles/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { }

export const Notes = (props: Props) => {
    return (
        <ScrollView>
            <View>
                <TouchableOpacity
                    style={AppStyle.boton}
                    onPress={() => props.navigation.navigate('Crear')}>
                    <Text style={AppStyle.textBoton}>Agregar nueva nota</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
