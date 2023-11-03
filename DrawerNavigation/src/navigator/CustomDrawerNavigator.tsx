import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/AppTheme';
import { MyTabs } from './BottomTabsNavigator';
import { MyMaterialTopTabs } from './MaterialTopTabNavigator';
import { IconsScreen } from '../screens/IconsScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { SettingsScreen } from '../screens/SettingsScreen';
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
            <Drawer.Screen name='BottomTabScreen' options={{ title: "Bottom Tabs" }} component={MyTabs} />
            <Drawer.Screen name='MyMaterialTopTabs' options={{ title: "Top Tabs" }} component={MyMaterialTopTabs} />
            <Drawer.Screen name='IconsScreen' options={{ title: "Iconos" }} component={IconsScreen} />
            <Drawer.Screen name='SettingsScreen' options={{ title: "Settings" }} component={SettingsScreen} />
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
                    onPress={() => navigation.navigate('Screen1')}>
                    <Icon name="airplane-outline" size={30} color="#900" />
                    <Text style={styles.menuTexto}>Screen 1</Text>
                </TouchableOpacity>

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

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('BottomTabScreen')}>
                    <Text style={styles.menuTexto}>Bottom Tabs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('MyMaterialTopTabs')}>
                    <Text style={styles.menuTexto}>Material Top Tabs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('IconsScreen')}>
                    <Text style={styles.menuTexto}>Iconos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('SettingsScreen')}>
                    <Text style={styles.menuTexto}>Settings</Text>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>
    )
}
