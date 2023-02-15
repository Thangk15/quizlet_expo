import React, { useState } from "react";
import { Dimensions, KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import { Text, StyleSheet, SafeAreaView, ScrollView, TextInput } from "react-native";
// import { Button, TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons"
// import MaterialIcons from "react-native-vector-icons/MaterialIcons"
// import { Alert } from "react-native/Libraries/Alert/Alert";
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height


const Create = ({navigation}) =>{
    const [lessonArray, setLessonArray] = useState({

    })
    const [lessonName, setLessonName] = useState("")
    const [lesson, setLesson] = useState({
        name:"",
        id:"",
        means:"",
        vocabularies:""
    }
    )
    const [count,setCount] = useState(1)
    const [inputFlield, setInputField] = useState([1])
    const addTextField = () =>{
        setCount((count) => count + 1)
        setInputField([...inputFlield, count + 1])
    }
    const [vocabulary, setVocabulary] = useState("");
    const [vocabularies, setVocabularies] = useState({})
    const [mean, setMean] = useState("");
    const [means, setMeans] = useState({})
    const submit = () =>{
        var a = []
        console.log(a)
        a.push({
            name:lessonName})
         for(let i = 1; i <= inputFlield.length; i++){

            if(lesson.vocabularies[i] == undefined && lesson.means[i] == undefined){
                a.push({
                    id:i,
                    vocabularies: "",
                    means: ""
                })
            }else if(lesson.vocabularies[i] == undefined && lesson.means[i] != undefined){
                a.push({
                    id:i,
                    vocabularies: "",
                    means: lesson.means[i].mean
                })
            }else if(lesson.vocabularies[i] !== undefined && lesson.means[i] == undefined){
                a.push({
                    id:i,
                    vocabularies: lesson.vocabularies[i].voca,
                    means:""
                })
            }else
            a.push({
                id:i,
                vocabularies: lesson.vocabularies[i].voca,
                means: lesson.means[i].mean
            })
        }

        setLessonArray(a)
  
    }
    console.log(lessonArray)

    return(
        <SafeAreaView style = {styles.main} >
            <SafeAreaView style = {styles.lesson_text_ctn} >
            <TouchableOpacity onPress={() => navigation.navigate("createfolder")} >
                <Text style = {{ alignSelf:"center", color:"white", fontSize:13,marginTop:10, width:50 }} >
                    Create Folder
                </Text>
            </TouchableOpacity>
            <SafeAreaView>
            <Text style = {{ fontSize: 24, fontWeight: "bold", top:10, color:"white"}} >Create Lesstion</Text>
            </SafeAreaView>

            <TouchableOpacity onPress={() => submit() } >
                <Text style = {{ alignSelf:"center", color:"white", marginTop:18, fontSize:15, marginRight:10}} >
                    Done
                </Text>
            </TouchableOpacity>
            </SafeAreaView>

            {/* <TextInput
                placeholder="text some thing"
            /> */}
            <SafeAreaView style={{color:"black", top:10}}>
            <TextInput 
                placeholder="Name of lesson"
                placeholderTextColor={"white"}
                onChangeText={newtext => setLessonName(newtext)}
                style = {{ backgroundColor:"",color:"white", margin:20}} />
            </SafeAreaView>


            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: "flex-end",}} behavior="padding" enabled   keyboardVerticalOffset={100} >
                <ScrollView>
                {inputFlield.map((inputFlield) =>{
                    return(
                        <SafeAreaView style = {styles.text_input_ctn} key = {inputFlield} >
                            {/* {console.log(inputFlield)} */}
                                <TextInput
                                    name = "vocabulary"
                                    autoFocus={true}
                                    onChangeText={e => {
                                        setVocabulary({...vocabulary, voca: e});
                                        vocabularies[inputFlield] = {...vocabulary, voca: e};
                                        setVocabularies(vocabularies)
                                        setLesson({...lesson,vocabularies})
                                    }}
                                    style = {styles.text_ip_vocabulary}
                                />
                                <Text style = {styles.text_name} >THUAT NGU</Text>
                                <TextInput
                                    name = "mean"
                                    onChangeText={e => {
                                        setMean({...mean, mean: e});
                                        means[inputFlield] = {...mean, mean: e};
                                        setMeans(means)
                                        setLesson({...lesson,means})
                                    }}
                                    style = {styles.text_ip_vocabulary} />
                                <Text 
                                    style = {styles.text_name}>DINH NGHIA</Text>
                        </SafeAreaView>
                    )
                })}
                </ScrollView>
            <TouchableOpacity onPress={() => addTextField()} >
                <Ionicons
                    name = "md-add-circle-outline"
                    color= "white"
                    size = {50}
                    style = {{ alignSelf:"center"}}
                />
            </TouchableOpacity>
        </KeyboardAvoidingView>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    lesson_text_ctn:{
        flexDirection: "row",
        width: widthfull,
        height: 50,
        justifyContent:"space-around",
    },
    main:{
        width: widthfull,
        height:heightfull,
        backgroundColor: "#0A092D"
      },
    text_ip: {
        with: 200,
        height:40,
        backgroundColor:"#2E3856",
        marginTop:20,
        marginLeft: 16,
        marginRight: 16,
        borderRadius:10,
    },
    text_input_ctn: {
        position:"relative",
        width:353,
        height:150,
        alignSelf:"center",
        marginTop:10,
        backgroundColor:"white",
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderRadius:10,
        backgroundColor:"#2E3856"
    },
    text_ip_vocabulary:{
        height:40,
        backgroundColor:"",
        borderBottomWidth:1,
        borderBottomColor:"white",
        color:"white",
    },
    text_name:{
        color:"#9CBCD5"
    }

})
export default Create