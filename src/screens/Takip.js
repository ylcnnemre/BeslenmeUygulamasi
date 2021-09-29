import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
const Takip = () => {
    const Stack=createStackNavigator()
    return (
        <ImageBackground source={require("../assets/images/mainbackground.jpg")} style={{flex:1}}>


        <View>
            <Text>
                asdasd
            </Text>
        </View>
        </ImageBackground>
    )
}

export default Takip
