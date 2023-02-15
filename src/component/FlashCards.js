import React, { useState } from "react";
import { View,Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height

const Flashcards = () =>{
  const TEST_LIST = [
    {
      idi: "1",
      question:"d0g",
      answer: "con cho",
    },
    {
      idi: "2",
      question:"cat",
      answer: "con meo",
    },
    {
      idi: "3",
      question:"bird",
      answer: "con chim",
    },
    {
      idi: "4",
      question:"bird",
      answer: "con chim",
    },
  ]
  const [touch, setTouch] = useState(false)
    return(
        <SafeAreaView  >
          <ScrollView horizontal={true} style = {styles.scroll} >
          {TEST_LIST.map((list,index) => {
            return(
              <SafeAreaView style = {styles.text} key={list.idi}>
                <TouchableOpacity style={styles.button} onPress={()=>setTouch(!touch)}>
                  <Text style={{fontSize:40, fontWeight:"bold", alignSelf:"center",color:"white"}} >{!touch?list.question:list.answer }</Text>
                  </TouchableOpacity>
              </SafeAreaView>
            )})}
          </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  name:{
    color: 'white',
    fontSize: 30,
    padding:5,
  },
  scroll:{
    height:200,
    width: widthfull,
    marginTop:10
  },
  text:{
    height: 200,
    width: widthfull-100,
    backgroundColor: "#2E3856",
    borderRadius: 10,
    marginLeft:50,
    marginRight:50,
    alignSelf: "center",

  },

  button: {
    flex:1,
    backgroundColor: '#2E3856',
    padding: 1,
    flexDirection:"column",
    justifyContent:"center"
  }
})
export default Flashcards