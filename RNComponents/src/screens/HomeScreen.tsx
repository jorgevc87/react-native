import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { appStyles } from '../theme/AppTheme'
import { RenderMenuItem } from "../components/FlatListMenuItem.tsx";

//Menu Items
const menuItems = [
    {
        id: '1',
        name: 'Animation 101',
        icon: 'cube-outline',
        components: 'Animation101Screen'
    },
    {
        id: '2',
        name: 'Animation 102',
        icon: 'albums-outline',
        components: 'Animation102Screen'
    },

]

const itemSeparator = () => {
    return (
        <View style={{
            borderBottomWidth: 1,
            opacity: 0.4,
            marginVertical: 8
        }} />
    )
}

//El componente listado de React Native
const MyFlatList = () => {
    return (
        <FlatList
            data={menuItems}
            renderItem={({ item }) => <RenderMenuItem
                icon={item.icon}
                title={item.name}
                components={item.components} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={renderListHeader()}
            ItemSeparatorComponent={itemSeparator}
        />
    )
}

const renderListHeader = () => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={appStyles.title}>Opciones de Menú</Text>
        </View>
    )
}

//Componente padre de la lista
export const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, ...appStyles.globalMargin }}>
            <View style={{ marginTop: 20 }}>
                <MyFlatList />
            </View>
        </SafeAreaView>
    )
}
