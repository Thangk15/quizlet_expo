import React, { useState } from "react";
import { View,Text, StyleSheet, SafeAreaView} from "react-native";
import { Dimensions } from "react-native";

var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height


const Flashcard_List = () =>{
    const TEST_LIST = [
        {
          id: "1",
          question:"d0g",
          answer: "con cho",
        },
        {
          id: "2",
          question:"cat",
          answer: "con meo",
        },
        {
          id: "3",
          question:"bird",
          answer: "con chim",
        },
        {
          id: "4",
          question:"bird",
          answer: "con chim",
        },
      ]
    
    return(
     
      <SafeAreaView >
      {TEST_LIST.map((quiz,index) => {
        return(
          <SafeAreaView style = {styles.text} key={quiz.id}>
            <Text style={{fontSize:20, marginLeft:10, marginBottom: 10, color:'white'}} >{quiz.question}</Text>
            <Text style={{fontSize:20, marginLeft:10,color:'white'}} >{quiz.answer}</Text>
          </SafeAreaView>
        )})}
    </SafeAreaView>
)
}
const styles = StyleSheet.create({

  text:{
    height: heightfull/10,
    width: "90%",
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    borderCurve: 25,
    marginTop:20,
    marginLeft:"5%",
    shadowOpacity:.2,
    shadowRadius:5,
    justifyContent:"center",
    backgroundColor:"#2E3856"
  },
})
export default Flashcard_List