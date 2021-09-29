import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Settings from './Settings'
import Hesap from './SettingsMenu/Hesap'
const MainSettings = () => {
    const Stack=createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen component={Settings} name="Menu" />
            <Stack.Screen component={Hesap} name="Hesap" />
        </Stack.Navigator>
       
    )
}

export default MainSettings
