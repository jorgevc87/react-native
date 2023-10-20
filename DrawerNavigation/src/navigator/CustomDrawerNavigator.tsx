import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/AppTheme';
//import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const CustomMDrawer = () => {

    const { width } = useWindowDimensions() //Puedo obtener la dimension de la pantalla

    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInterno{...props} />}>
            <Drawer.Screen name='Screen1' options={{ title: "Pagina 1" }} component={Screen1} />
            <Drawer.Screen name='Screen2' options={{ title: "Pagina 2" }} component={Screen2} />
            <Drawer.Screen name='Screen3' options={{ title: "Pagina 3" }} component={Screen3} />
        </Drawer.Navigator>
    )
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (

        <DrawerContentScrollView>

            {/*Parte del avatar*/}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/*Opciones del Menú*/}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('Screen2')}>
                    <Text style={styles.menuTexto}>Screen 2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('Screen3')}>
                    <Text style={styles.menuTexto}>Screen 3</Text>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>
    )
}
