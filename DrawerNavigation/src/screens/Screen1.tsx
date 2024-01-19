import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
//import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../theme/AppTheme";

//interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any> { }; //Props para Drawer

export const Screen1 = ({ navigation }: Props) => {

  const insets = useSafeAreaInsets()

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
    <View style={{ marginTop: insets.top }}>
      <Text style={styles.title}>
        Screen 1
      </Text>
    </View>
  );
};
