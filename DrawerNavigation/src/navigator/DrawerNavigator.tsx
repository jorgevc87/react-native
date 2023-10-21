import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';
import { useWindowDimensions } from 'react-native';
import { BottomTabScreen } from '../screens/BottomTabScreen';

const Drawer = createDrawerNavigator();

export const MDrawer = () => {

    const { width } = useWindowDimensions() //Puedo obtener la dimension de la pantalla

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Screen1' options={{ title: "Pagina 1" }} component={Screen1}/>
            <Drawer.Screen name='Screen2' options={{ title: "Pagina 2" }} component={Screen2}/>
            <Drawer.Screen name='Screen3' options={{ title: "Pagina 3" }} component={Screen3}/>
            <Drawer.Screen name='BottomTabScreen' options={{ title: "Bottom Tabs" }} component={BottomTabScreen}/>
        </Drawer.Navigator>
    )
}




