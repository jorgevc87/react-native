import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopTabScreen1 } from '../screens/TopTabScreen1'
import { TopTabScreen2 } from '../screens/TopTabScreen2'
import { TopTabScreen3 } from '../screens/TopTabScreen3'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { Animated } from 'react-native'

const topTabs = createMaterialTopTabNavigator()

export const MyMaterialTopTabs = () => {

  const { top: paddingTop } = useSafeAreaInsets()

  return (
    <topTabs.Navigator
      screenOptions={({ route }) => (
        {
          tabBarItemStyle: {

          },
          tabBarShowIcon: true,
          tabBarIndicator({state}) {
              return <Icon name={'arrow-redo-outline'} size={20} color={'#900'} focused />
          },
          tabBarShowLabel: false,
          tabBarIconStyle: {
            width: 'auto',
            height: 20
          },
          tabBarIcon({ color, focused }) {
            let iconName: String = ''

            switch (route.name) {
              case 'TopTabScreen1':
                iconName = 'arrow-redo-outline'
                break

              case 'TopTabScreen2':
                iconName = 'at-circle-outline'
                break

              case 'TopTabScreen3':
                iconName = 'battery-full-outline'
                break
            }

            return <Icon name={iconName} size={20} color={color} focused />
          }
        })}>

      <topTabs.Screen
        name='TopTabScreen1'
        component={TopTabScreen1} />

      <topTabs.Screen
        name='TopTabScreen2'
        component={TopTabScreen2} />

      <topTabs.Screen
        name='TopTabScreen3'
        component={TopTabScreen3} />

    </topTabs.Navigator>
  )
}