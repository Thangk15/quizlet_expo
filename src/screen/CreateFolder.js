import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height
const CreateFolder = ({navigation}) =>{
    const [folder, setFolder] = useState({
        folderName:"",
        folerDes:""
    })
    const [folderName, setFolderName] = useState("")
    const [folderDes, setFolderDes] = useState("")
    const submit = () =>{
        setFolder({folderName,folderDes})
    }
    console.log(folder)
    return(
        <SafeAreaView style={styles.container} >
            <SafeAreaView style = {styles.name_page_ctn} >

                <Text style={{fontSize:25, fontWeight: "bold", color:"white"}} >Create Folder</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.text_ip_ctn}>
            <TextInput
                placeholder="Folder Name"
                placeholderTextColor={"white"}
                onChangeText={newtext => setFolderName(newtext)}
                style = {styles.text_ip}
            />
            <TextInput
                placeholder="Descripttion"
                placeholderTextColor={"white"}
                onChangeText={newtext => setFolderDes(newtext)}
                style = {styles.text_ip}
            />
            </SafeAreaView>
            <TouchableOpacity style={{alignSelf:"center"}} onPress={() => (submit(), navigation.navigate("create"))} >
            <Text style = {{fontSize:24}} >Done</Text>
            </TouchableOpacity>



        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        width:widthfull,
        height:heightfull,
        backgroundColor:"#2E3856"
    },
    name_page_ctn:{
        width: widthfull,
        height:50,
        flexDirection:"row",
        justifyContent:"space-around",
    },
    text_ip:{
        borderBottomWidth:2,
        borderColor:"white",
        marginLeft:20,
        marginRight:20,
        marginTop:10

    },
    text_ip_ctn:{
        width:widthfull,
        height:150,
        backgroundColor:""
    }

})
export default CreateFolder