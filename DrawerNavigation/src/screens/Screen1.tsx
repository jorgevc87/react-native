import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
//import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from "@react-navigation/drawer";

//interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any> {
}; //Props para Drawer

export const Screen1 = ({ navigation }: Props) => {


  //Agregando un Toogle al menu Drawer
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Menú"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    });
  });

  return (
    <View>
      <Text>
        Screen 1
      </Text>
    </View>
  );
};
