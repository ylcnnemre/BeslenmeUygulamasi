import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import FirstMenu from './src/screens/FirstMenu'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Test=()=>{
  return (
    <View>
      <Text>
        asdsad
      </Text>
    </View>
  )
}


const App = () => {
  const Stack=createStackNavigator()
  const [routeName,setRouteName]=useState("")

  useEffect(()=>{
     getLoginControl()
  },[])

 const getLoginControl= async ()=>{
       let veri=await AsyncStorage.getItem("login")
      console.log("veri => ",veri)
      if(veri==null)
      {
        AsyncStorage.setItem("login","false")
        setRouteName("Login")
      }
      else{
        if(veri=="false")
        {
          setRouteName("Login")
        }
        else{
          setRouteName("FirstMenu")
        }
      } 
    //  veri=="false" ? setLogin("Login") : setLogin("FirstMenu")  
      
     
  } 

    
  
  return (
    <NavigationContainer >
    {
      routeName==""  ? <Text>
        Loading 
      </Text> : 
      <Stack.Navigator initialRouteName={Login} screenOptions={{headerShown:false}}>
        <Stack.Screen component={FirstMenu} name="FirstMenu" />
        <Stack.Screen component={Login} name="Login"/>
      </Stack.Navigator> 
     
    }
   </NavigationContainer> 
   
  )
}

export default App

{/* <Stack.Navigator initialRouteName={routeName}  screenOptions={{
      headerShown:false
    }}>
       <Stack.Screen component={FirstMenu} name="FirstMenu" options={{
        gestureEnabled:false
      }} /> 
      <Stack.Screen component={Login} name="Login"/>
      <Stack.Screen component={Register} name="Register" />
    </Stack.Navigator> */}