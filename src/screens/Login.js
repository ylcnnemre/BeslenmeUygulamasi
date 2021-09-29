import React, { useState } from 'react'
import { View, Text,StyleSheet,ImageBackground, TextInput, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import { LoginScreenColor } from '../constants/Colors'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigation()
    const LoginEvent= async ()=>{
        if(username=="root" && password=="abc")
        {
            navigate.navigate("FirstMenu")
            AsyncStorage.setItem("login","true")
        }

    }
    const changeUsername=(data)=>{
        setUsername(data)
    }   


    return (
        <KeyboardAvoidingView style={{flex:1}} >
        <ImageBackground style={style.ImageBackground} source={require("../assets/images/Login.jpg")}>
            <View style={style.MainContainer} >
                <View style={style.InputContainer} >
                <View style={style.InputField}>
                    <Icons name="email" size={30} color="orange" />
                    <TextInput placeholder="Email" placeholderTextColor="black" style={style.Input}   onChangeText={(value)=>setUsername(value)} />
                   
                </View>
                <View style={style.InputField}>
                    <Icons name="key" size={30} color="orange" />
                    <TextInput placeholder="Parola" secureTextEntry={true} placeholderTextColor="black" style={style.Input} onChangeText={(val)=>setPassword(val)} />
                </View>
                <TouchableOpacity style={{alignItems:"center",marginTop:20}}>
                    <Text style={{color:"green",fontSize:15}}>
                        Şifremi Unuttum
                    </Text>
                </TouchableOpacity>

                <View style={style.ButtonContainer}  >
                    <View>
                        
                     <TouchableOpacity style={style.loginButton} onPress={()=>LoginEvent()}>
                        <Text style={{color:"white"}}>
                            GİRİŞ YAP
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.registerButton}>
                        <Text>
                            KAYIT OL
                        </Text>
                    </TouchableOpacity> 

                    <Button title="tıkla" onPress={async()=>{
                        await AsyncStorage.setItem("veri","merhabadunyalii")
                        let data=await AsyncStorage.getItem("login")
                        console.log("data =>",data)
                    }} />
                    </View>
                    
                </View>
                </View>
                
            </View>
            <View style={{backgroundColor:"rgba(0,0,0,.1)",position:"absolute",width:"100%",height:"100%",top:0,left:0}}></View>
        </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const style=StyleSheet.create({
    ImageBackground:{
        flex: 1,
    },
    MainContainer:{
        
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:20,
        zIndex:100
    },
    InputContainer:{
        paddingTop:30,
        backgroundColor:LoginScreenColor,
        opacity: .9,
        width: "100%",
        marginHorizontal:30,
        paddingHorizontal:15,
        borderRadius:20
    },
    InputField:{
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:15,
        borderBottomWidth:1,
        
    },
    Input:{
        flex:1,
        paddingVertical:20,
        color: "black"
    },
    loginButton:{
        backgroundColor:"orange",
        alignSelf:"flex-start",
        paddingVertical:10,
        paddingHorizontal:25,
        borderRadius:15,
        color: "white",
        marginVertical:10
    },
    registerButton:{
        backgroundColor:"transparent",
        borderWidth:1,
        borderColor:"gray",
        paddingVertical:10,
        paddingHorizontal:25,
        borderRadius:15,
        alignSelf:"flex-start",
        color: "white" ,
        marginVertical:10
    },
    
    ButtonContainer:{
        paddingVertical:40,
        justifyContent:"center",
        alignItems:"center"
    
        
    }
})

export default Login
