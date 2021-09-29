import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet,ImageBackground, Button,TouchableOpacity, TextInput, BackHandler } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import Settings from './Settings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import FeatherIcons from "react-native-vector-icons/Feather"
import Takip from './Takip'
import Today from './Today'
import receteler from './receteler'
import Profil from './Profil'
import MainSettings from './MainSettings'
const FirstMenu = () => {
    const Tabs=createBottomTabNavigator()
    const navigate=useNavigation()
    const [labelColor,setlabelColor]=useState("black")
    const getData= async ()=>{
        await AsyncStorage.setItem("login","false")
        navigate.navigate("Login")
    }

    return (
        <Tabs.Navigator screenOptions={{headerShown:false,tabBarLabelStyle:{fontSize:15},tabBarActiveTintColor:"orange",tabBarStyle:{
           height: 60,
           backgroundColor:"#F5F5F5"
        }}} 
          
        >
            <Tabs.Screen name="Ayarlar"    component={MainSettings}  options={{
                
                tabBarIcon:({focused})=>{
                    return <FeatherIcons name="settings"  size={30} />
                }
            }} />
            <Tabs.Screen name="Takip" component={Takip} options={{
                
                tabBarIcon:({focused})=>{
                    return <Icons name="notebook-outline"  size={30} />
                }
            }} />
             <Tabs.Screen name="Bugün" component={Today} options={{
                
                tabBarIcon:({focused})=>{
                    return <FeatherIcons name="sunset"  size={30} />
                }
            }} />
            <Tabs.Screen name="Receteler" component={receteler} options={{
                
                tabBarIcon:({focused})=>{
                    return <Icons name="food-variant"  size={30} />
                }
            }} />
            <Tabs.Screen name="Profil" component={Profil} options={{
                
                tabBarIcon:({focused})=>{
                    return <FeatherIcons name="user"  size={30} />
                }
            }} />
        </Tabs.Navigator>
    )
}

const style=StyleSheet.create({
    container:{
        flex: 1,
      
    },  
    mainView:{
        
    },
    ımage:{
        flex: 1,
        justifyContent:"flex-end",
        backgroundColor:"red"
    },
    buttonContainer:{
        paddingHorizontal:20
    },  
    loginButton:{
        marginVertical:10,
        justifyContent:"center",
        alignItems:"center",
        padding: 15,
        borderRadius:20,
        backgroundColor:"orange",
        zIndex:200
    },
    tabBarIcon:{
        color:"orange",
        borderWidth:1,
        borderRadius:20,
        padding:3,
        borderColor:"orange"
    }
})

export default FirstMenu
