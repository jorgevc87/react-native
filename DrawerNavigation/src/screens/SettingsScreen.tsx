import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/authContext/AuthContext'

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets()

    const { authState } = useContext(AuthContext)

    return (
        <View style={{
            marginTop: insets.top + 20,
            marginLeft: insets.left + 20
        }}>
            <Text style={styles.title}>
                Settings Screen
            </Text>

            <Text>
                {JSON.stringify(authState, null, 4)}
            </Text>
        </View>
    )
}
