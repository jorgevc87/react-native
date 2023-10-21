import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabScreen1 } from "../screens/TabScreen1"
import { TabScreen2 } from "../screens/TabScreen2"
import { TabScreen3 } from "../screens/TabScreen3"
import { Text } from "react-native"

const tabs = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <tabs.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'red',
        tabBarActiveBackgroundColor: 'white',
        tabBarIcon({ color, focused, size }) {

          let iconName: String = ''

          switch (route.name) {
            case 'TabScreen1':
              iconName = 'T1'
              break

            case 'TabScreen2':
              iconName = 'T2'
              break

            case 'TabScreen3':
              iconName = 'T3'
              break
          }

          return <Text style={{ color }}>{iconName}</Text>
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

      <tabs.Screen
        name="TabScreen1"
        options={{ title: 'Tab 1' }}
        component={TabScreen1} />

      <tabs.Screen
        name="TabScreen2"
        options={{ title: 'Tab 2' }}
        component={TabScreen2} />

      <tabs.Screen
        name="TabScreen3"
        options={{ title: 'Tab 3' }}
        component={TabScreen3} />
    </tabs.Navigator>
  );
};
