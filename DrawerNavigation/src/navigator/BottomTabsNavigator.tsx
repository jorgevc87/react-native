import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BottomTabScreen1 } from "../screens/BottomTabScreen1"
import { BottomTabScreen2 } from "../screens/BottomTabScreen2"
import { BottomTabScreen3 } from "../screens/BottomTabScreen3"
import { Platform, Text } from "react-native"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { styles } from "../theme/AppTheme"
import Icon from 'react-native-vector-icons/Ionicons'

export const MyTabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIos />
    : <TabsAndroid />
}

//MaterialBottom Tabs Android
const BottomTabsAndroid = createMaterialBottomTabNavigator()
function TabsAndroid() {
  return (
    <BottomTabsAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: 'red',
        paddingBottom: 5
      }}
      backBehavior='order'
      initialRouteName='BottomTabScreen1'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'red',
        tabBarActiveBackgroundColor: 'tomato',
        tabBarIcon({ color, focused }) {

          let iconName: String = ''

          switch (route.name) {
            case 'BottomTabScreen1':
              iconName = 'arrow-redo-outline'
              break

            case 'BottomTabScreen2':
              iconName = 'at-circle-outline'
              break

            case 'BottomTabScreen3':
              iconName = 'battery-full-outline'
              break
          }

          return <Icon name={iconName} size={20} color={color} focused/>
        },
        tabBarStyle: {
          borderTopColor: 'white',
          borderWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        }
      })}
    >

      <BottomTabsAndroid.Screen
        name="BottomTabScreen1"
        options={{ title: 'Tab 1' }}
        component={BottomTabScreen1} />

      <BottomTabsAndroid.Screen
        name="BottomTabScreen2"
        options={{ title: 'Tab 2' }}
        component={BottomTabScreen2} />

      <BottomTabsAndroid.Screen
        name="BottomTabScreen3"
        options={{ title: 'Tab 3' }}
        component={BottomTabScreen3} />

    </BottomTabsAndroid.Navigator>
  )
}


//Bottom Tabs iOS
const BottomTabsIos = createBottomTabNavigator();

function TabsIos() {
  return (
    <BottomTabsIos.Navigator

      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'red',
        tabBarActiveBackgroundColor: 'white',
        tabBarIcon({ color, focused, size }) {

          let iconName: String = ''

          switch (route.name) {
            case 'BottomTabScreen1':
              iconName = 'arrow-redo-outline'
              break

            case 'BottomTabScreen2':
              iconName = 'at-circle-outline'
              break

            case 'BottomTabScreen3':
              iconName = 'battery-full-outline'
              break
          }

          return <Icon name={iconName} size={20} />
        },
        tabBarStyle: {
          borderTopColor: 'white',
          borderWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        }
      })}>

      {/*
      Esta es una forma de agregar el icono a un Tab, con una funcion que devuelva un componente

        <tabs.Screen
        name="TabScreen1"
        options={{
          title: 'Tab 1',
          tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>
        }}
        component={TabScreen1} />      
      */}

      <BottomTabsIos.Screen
        name="BottomTabScreen1"
        options={{ title: 'Tab 1' }}
        component={BottomTabScreen1} />

      <BottomTabsIos.Screen
        name="BottomTabScreen2"
        options={{ title: 'Tab 2' }}
        component={BottomTabScreen2} />

      <BottomTabsIos.Screen
        name="BottomTabScreen3"
        options={{ title: 'Tab 3' }}
        component={BottomTabScreen3} />
    </BottomTabsIos.Navigator>
  )
}