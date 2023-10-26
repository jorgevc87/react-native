import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopTabScreen1 } from '../screens/TopTabScreen1'
import { TopTabScreen2 } from '../screens/TopTabScreen2'
import { TopTabScreen3 } from '../screens/TopTabScreen3'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const topTabs = createMaterialTopTabNavigator()

export const MyMaterialTopTabs = () => {

  const { top: paddingTop } = useSafeAreaInsets()

  return (
    <topTabs.Navigator>

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