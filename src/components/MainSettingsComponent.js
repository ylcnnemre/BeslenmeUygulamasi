import React from 'react'
import { View, Text,TouchableOpacity , StyleSheet} from 'react-native'
import FeatherIcons from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/core'
const MainSettingsComponent = ({name,icons1,icons2,stackName}) => {
    const navigate=useNavigation()
    const style=stylef()
    return (  
                <TouchableOpacity style={style.Button} onPress={()=>navigate.navigate(stackName)}>
                    <View style={style.ButtonSubView}>
                        <MaterialCommunityIcons  style={{borderWidth:1,borderRadius:20,paddingHorizontal:5,paddingLeft:8,paddingVertical:5}} name={icons1} size={20} />
                        <Text style={{fontSize:17,marginLeft:10}}>
                            {name}
                        </Text>
                     </View>    
                    <MaterialIcons name={icons2} size={20} />
                </TouchableOpacity>

    )
}
const stylef=()=>StyleSheet.create({
    Button:{
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        borderRadius:15,
        width: "100%",
        padding: 14,
        backgroundColor:"#fffdd0",
        marginVertical:20
    },
    ButtonSubView:{
        flexDirection:"row",
        alignItems:"center"
    }
})
export default MainSettingsComponent
