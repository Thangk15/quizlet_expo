import React from "react";
import { View,Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import Lesson from "../component/Lesson";
import Folder from "../component/Folder";
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height

const Home = () =>{
  const exam = [
    {
      id: "1",
      name:"lesson 1",
      count: 32,
      user_name: "son"
    },
    {
      id: "2",
      name:"lesson 2",
      count: 32,
      user_name: "son"
    },
    {
      id: "3",
      name:"lesson 3",
      count: 32,
      user_name: "son"
    },
  ]
    return(
      <SafeAreaView style = {styles.main}>
      <View style = {styles.container} >
        <Text style = {styles.name} >Quizzy</Text>
      </View>
    <ScrollView>


    <SafeAreaView style = {styles.ac_text_ctn}>
    <Text style = {{color:"#FFFFFF", fontWeight: 'bold',fontSize: 15, marginLeft:20}} >Lesson</Text>
        {/* <Button style = {{color:"#FF8FA2", textDecorationLine: 'underline',fontSize: 15, backgroundColor:'#6A5AE0'}}
        title = "see all"
        /> */}
    </SafeAreaView>

    <SafeAreaView style = {styles.LessonCtn} >
  
      <View style = {styles.Lesson} >
      <View style = {styles.Lesson_icon}></View>
      <View style = {styles.Lesson_icon}></View>
    </View>
    </SafeAreaView>
    <SafeAreaView style = {styles.ac_text_ctn}>
        <Text style = {{color:"#FFFFFF", fontWeight: 'bold',fontSize: 15, marginLeft:20}} >Lesson</Text>
        <Text style = {{color:"#FF8FA2", textDecorationLine: 'underline',fontSize: 15}}>See all</Text>
    </SafeAreaView>
    <Lesson props={exam}/>
    <SafeAreaView style = {styles.ac_text_ctn}>
    <Text style = {{color:"#FFFFFF", fontWeight: 'bold',fontSize: 15, marginLeft:20}} >Folder</Text>
        <Text style = {{color:"#FF8FA2", textDecorationLine: 'underline',fontSize: 15}}>See all</Text>
    </SafeAreaView>
    <Folder props = {exam} />
    </ScrollView>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  name:{
    fontFamily: 'nunito',
    color: '#FFFFFF',
    fontSize: 30,
    padding:5,

  },
  main:{
    width: widthfull,
    height:heightfull,
    backgroundColor: "#0A092D"
  },
  container:{
    height: 45,
    width: widthfull,
    flexDirection: 'row',
    justifyContent: 'center',
    positions: "relative",
  },
  LessonCtn:{
    height:180,
    width: widthfull,
    positions: "relative",
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Lesson:{
    height:160,
    width:350,
    backgroundColor: '#2E3856',
    borderRadius:10,
    positions: "relative",
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  Lesson_icon:{
    width:100,
    height:120,
    backgroundColor:"black",
    marginTop:20
  },
  ac_text_ctn:{
    height: 25,
    width: 380,
    position:"relative",
    flexDirection: "row",
    justifyContent:"space-between",
  },
})
export default Home