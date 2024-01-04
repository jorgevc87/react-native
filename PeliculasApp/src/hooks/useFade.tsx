import { useRef } from "react"
import { Animated } from "react-native"

export const useFade = () => {

    //El valor inicial de la animacion, '0' significa que está transparente al inicio
    const opacity = useRef(new Animated.Value(0)).current

    //Seteando el valor de 'opacity' a 1 para volverlo completamente visible
    const fadeIn = () => {
        Animated.timing(
            opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }
        ).start()
    }

    //Seteando el valor de 'opacity' a 0 para volverlo invisible
    const fadeOut = () => {
        Animated.timing(
            opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }
        ).start()
    }

    return {
        opacity,
        fadeIn,
        fadeOut
    }
}




