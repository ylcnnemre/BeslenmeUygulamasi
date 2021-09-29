import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FeatherIcons from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MainSettingsComponent from '../components/MainSettingsComponent'
const Settings = () => {
    const Stack=createStackNavigator()
    
    return (
        <ImageBackground source={require("../assets/images/mainbackground.jpg")} imageStyle={{resizeMode:"cover",alignSelf:"center"}} style={{flex:1}}>

   
        <View style={style.mainView}>
            <MainSettingsComponent  stackName="Hesap" name="Hesap" icons1="lock-open-outline" icons2="arrow-forward-ios" />
            <MainSettingsComponent  name="Profil" icons1="account" icons2="arrow-forward-ios" />
            <MainSettingsComponent  name="Hedef" icons1="target" icons2="arrow-forward-ios" />
            <MainSettingsComponent  name="Birimler" icons1="ruler" icons2="arrow-forward-ios" />
            <MainSettingsComponent  name="Yardım" icons1="help" icons2="arrow-forward-ios" />
        </View>
        </ImageBackground>
    )
}


const style=StyleSheet.create({
    mainView:{
        flex: 1,
        
        paddingHorizontal:20,
        alignItems:"center",
        justifyContent:"center"
    }
})


export default Settings
