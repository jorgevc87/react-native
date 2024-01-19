import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons.js";
import React from "react";
import {useNavigation} from "@react-navigation/native";

//Se define un tipo para que solo se permita datos de tipo DATA
export type ItemProps = { title?: string, icon?: string, components?: string }

export const RenderMenuItem = ({title = "Title", icon = "Icono", components = "Components"}: ItemProps) => (
    <TouchableOpacity
        activeOpacity={0.8}>
        <View style={styles.container}>
            <Icon
                name={icon}
                color={"gray"}
                size={15}
            />

            <Text style={styles.itemText}>
                {title} - {icon}
            </Text>

            <View style={styles.containerEnd}>
                <Icon
                    name='chevron-forward-outline'
                    color='gray'
                    size={15}
                />
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    containerEnd: {
        flex: 1,
        flexDirection: "row-reverse"
    },
    itemText: {
        marginLeft: 10
    }
})

