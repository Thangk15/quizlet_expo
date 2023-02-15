import { View, Text, SafeAreaView, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import { Dimensions } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA25Q1oaEXqw4kAC5pmn6fuoSbU0Hc4xy0",
//   authDomain: "fire-base-22867.firebaseapp.com",
//   projectId: "fire-base-22867",
//   storageBucket: "fire-base-22867.appspot.com",
//   messagingSenderId: "521608606829",
//   appId: "1:521608606829:web:12d23edec4ef3e6c7e7b64"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const Login = ({navigation}) => {
  const [userName, setUserName] = useState("")
  const [Password, setPassword] = useState("")
  const [eyeIcon, setEyeicon] = useState("eye")
  const [typePass, setTypePass] = useState()
  const [isSecure, setIsSecure] = useState(true)
  // const create = () =>{
  //   auth()
  // .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });
 // }
  
  return (
    <SafeAreaView style = {styles.container} >
    <SafeAreaView style = {styles.textInput_ctn} >
      <Text style={styles.text} >User name</Text>
      <TextInput fontSize={15} onChangeText={(newtext) => setUserName(newtext) } style={styles.textInput} placeholder='username' placeholderTextColor={"gray"} >
      </TextInput>
      <Text style={styles.text} >Password</Text>
      <TextInput fontSize={15} onChangeText={(newtext) => setPassword(newtext) } style={styles.textInput} secureTextEntry={isSecure} placeholder='Passwork' placeholderTextColor={"gray"} >
      </TextInput>
      <TouchableOpacity onPress={() => setEyeicon("eye-off") } >
              <Ionicons
                        name={eyeIcon}
                        size={24}
                        color="white"
                      />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"gray", marginTop:100, height:50,width:"60%", marginLeft:"20%", borderRadius:10}} onPress={() => navigation.navigate("TabBar")} >
        <Text style={{textAlign:"center", marginTop:10, fontSize:20, color:"white"}} >Login</Text>

    </TouchableOpacity>
    </SafeAreaView>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    width: widthfull,
    height:heightfull,
    backgroundColor:"#0A092D",
    flexDirection:"column",
    justifyContent:"center"
  },
  textInput_ctn:{
    //backgroundColor:"blue",
    height:"50%",
  },
  textInput:{
    alignSelf:"center",
    borderBottomWidth:1,
    width:"100%",
    borderColor:"white",
    backgroundColor:"white"
  },
  text:{
    alignSelf:"flex-start",
    fontSize:20,
    color:"white"
  },
  text_color:{
    textColor:"white"
  }
})
export default Login