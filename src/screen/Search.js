import React, { useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView, TextInput, StyleSheet, View, FlatList, Text, Image } from "react-native";
import Nav_Search_Touch from "../component/Nav_Search_Touch";
import Icon from 'react-native-vector-icons/Feather';


var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height

// const Item = ({title}) =>{
//     return(
//       <View style = {styles.name_ctn} >
//         <Text style = {styles.name_text}>{title}</Text>
//       </View>
//     )
// }
// const renderItem = ({item}) =>{
//   return(
//   <View>
//     <Text>{item.name}</Text>
//   </View>
//   )
// }

const Search = () =>{
    const [touch, setTouch] = useState(true)
    const [touch1, setTouch1] = useState(false)

const [exam, setExam] = useState([
            {
              id: "1",
              name:"lesson 1",
              count: 32,
              user_name: "son",
              avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
            },
            {
              id: "2",
              name:"lesson 2",
              count: 32,
              user_name: "son",
              avt: 'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/avatar-anime-1.jpg?ssl=1',
            },
            {
              id: "3",
              name:"lesson 3",
              count: 32,
              user_name: "linh",
              avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
            },
            {
              id: "4",
              name:"lesson 3",
              count: 32,
              user_name: "son",
              avt: 'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/avatar-anime-1.jpg?ssl=1',
            },
            {
              id: "5",
              name:"lesson 3",
              count: 32,
              user_name: "son",
              avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
            },
            {
              id: "6",
              name:"lesson 3",
              count: 32,
              user_name: "son",
              avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
            },
            {
              id: "7",
              name:"lessonnn",
              count: 32,
              user_name: "son",
              avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
            },
          ])
const [exam1, setExam1] = useState([
    {
        id:1,
        name:"nihon",
        user_name:"son",
        avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
    },
    {
        id:2,
        name:"english",
        user_name:"tai",
        avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
    },
    {
        id:3,
        name:"vietnamese",
        user_name:"thang",
        avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
    },
    {
        id:4,
        name:"vietnamese",
        user_name:"thang",
        avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
    },
    {
        id:5,
        name:"vietnamese",
        user_name:"thang",
        avt: 'https://i.pinimg.com/originals/e8/55/73/e85573853e5cd1cf589b6a3e015c2d18.jpg',
    }
    
])

const [search, setSearch] = useState([...exam])
const [folder, setFolder] = useState([...exam1])
const [display,setDisplay] = useState(search)
    return(
    <SafeAreaView style = {styles.main} >
      <SafeAreaView style={{flex: 1}}>
              <View style = {styles.text_ip}>
              <TextInput placeholder="Search" placeholderTextColor={'white'} style = {{color: 'white', height: '100%', paddingLeft: 20, paddingRight: 20} }
              onChangeText = {(search_string) =>{
                var temp = [...exam]
                setSearch(temp)
                setSearch(exam.filter((exam) =>{
                  return exam.name.toString().includes(search_string.toLocaleLowerCase()) ||
                  exam.user_name.toString().includes(search_string.toLocaleLowerCase())
                }))
                var temp1 = [...exam1]
                setFolder(temp1)
                setFolder(exam1.filter((exam1) => {
                  return exam1.name.toString().includes(search_string.toLocaleLowerCase()) ||
                  exam1.user.toString().includes(search_string.toLocaleLowerCase())
                }))
                console.log(folder)
              }}
              
              /> 
              </View>
              {/* <SearchNav/> */}
      </SafeAreaView>

      <SafeAreaView style={{backgroundColor: '#2e3969', height:50}}>
          <SafeAreaView style={styles.touch_ctn}>
              <TouchableOpacity onPress={() => (setTouch(true),setTouch1(false))} style={touch?styles.touch:styles.ontouch} >
                  <Text style={{color:"white",alignSelf:"center", padding:10, fontSize: 20}}>Lession</Text>
              </TouchableOpacity  >
              <TouchableOpacity onPress={() => (setTouch(false),setTouch1(true))} style={touch1?styles.touch:styles.ontouch}>
                  <Text style={{color:"white", alignSelf:"center", padding:10, fontSize: 20}}>Folder</Text>
              </TouchableOpacity>
          </SafeAreaView>
      </SafeAreaView>

      <SafeAreaView style = {styles.search_ctn}>
        <View style={{}}>
        {touch ? 
        <ScrollView> 
          {search.map((search,index) => {
                return(
                  <TouchableOpacity style = {styles.lesson} key={search.id}>
                    <SafeAreaView style = {styles.acm_name_text}>
                      <View style = {styles.name_ctn}>
                      <Text style={{color:'white', fontSize: 25, fontWeight: '700'}} >{search.name}</Text>
                      </View>
                      <View style = {styles.term_ctn}>
                      <Text style={{color:"white", fontSize:18, paddingBottom: 10}}>{search.count + " thuat ngu"}</Text>
                      </View>
                    </SafeAreaView>
                    <View style={{flex: 1,flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={{uri: search.avt}} style={{ height: 30, width: 30, borderRadius: 20}}/>
                      <Text style={{color:'white',fontSize: 18,fontWeight: '600', textAlign: 'center', marginLeft: 5}}>{search.user_name}</Text>
                    </View>
                  </TouchableOpacity>
                )})}
        </ScrollView>
        :
        <ScrollView>
          {folder.map((search,index) => {
                return(
                  <TouchableOpacity style = {styles.lesson} key={search.id}>
                    <Icon name='folder' size={25} color='white' style={{paddingTop: 15}}></Icon>

                    <Text style={{color:'white', fontSize: 25, fontWeight: '700'}}>{search.name}</Text>

                    <View style={{flex: 1,flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={{uri: search.avt}} style={{ height: 30, width: 30, borderRadius: 20}}/>
                      <Text style={{color:'white',fontSize: 16,fontWeight: '500', textAlign: 'center', padding: 5, marginLeft: 5}}>{search.user_name}</Text>
                    </View>
                  </TouchableOpacity>
                )})}
        </ScrollView>
        }

        {/* { 
        (touch?search:folder).map((search,index) => {
                return(
                  <TouchableOpacity style = {styles.lesson} key={search.id}>
                    <SafeAreaView style = {styles.acm_name_text}>
                      <View style = {styles.name_ctn}>
                      <Text style={{color:'white', fontSize: 25, fontWeight: '700'}} >{search.name}</Text>
                      </View>
                      <View style = {styles.term_ctn}>
                      <Text style={{color:"white", fontSize:18, paddingBottom: 10}}>{search.count + " thuat ngu"}</Text>
                      </View>
                    </SafeAreaView>
                    <View style={{flex: 1,flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={{uri: search.avt}} style={{ height: 30, width: 30, borderRadius: 20}}/>
                      <Text style={{color:'white',fontSize: 18,fontWeight: '600', textAlign: 'center', marginLeft: 5}}>{search.user_name}</Text>
                    </View>
                  </TouchableOpacity>
                )
        })} */}
        
        </View>
      </SafeAreaView>

    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  main:{
    width: widthfull,
    height:heightfull,
    backgroundColor: "#0A092D",
    // flexDirection: 'column'
    // flex: 3,
    // backgroundColor: "red",
  },
    text_ip: {
        borderColor: "#FFFFFF",
        border: 3,
        with: '100%',
        height:40,
        backgroundColor:"#2E3856",
        // backgroundColor:"green",
        // color: 'red' ,

        marginTop:20,
        marginLeft: 16,
        marginRight: 16,
        borderRadius:10,
    },
    name_ctn:{
      width: '100%',
      height:30,
      marginTop:10,
      // backgroundColor: 'red',
      // marginBottom:20
    },
    term_ctn:{
      // width: 80,
      // color: 'white',
      // fontSize: 18,
      // backgroundColor:"white",
      // borderRadius:20,
      
    },
    name_text:{
      color: 'white'
    },
    acm_name_text:{
      flex: 2,
      paddingTop: 0,
      width: 240,
      // height:50,
      // backgroundColor:"green",
      flexDirection:"column",
      justifyContent:"space-between"
    },   
    lesson:{
      backgroundColor: '#2e3969', 
      margin: 20, 
      marginBottom: 0, 
      borderRadius: 10, 
      padding: 20, 
      paddingTop: 0,
      paddingBottom: 10,
      height: 127, 
      width: 350
      // backgroundColor: 'blue'
    },
    search_ctn:{
      width: widthfull,
      height:heightfull,
      flexDirection:"column",
      alignItems:"center",
      flex: 8,
      // backgroundColor: 'green',
      // backgroundColor: '#000044',
      
    },
    touch_ctn:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    touch:{
        width: "50%",
        borderBottomWidth:4,
        borderBottomColor: '#546999'
    },
    ontouch:{
        width: "50%",
    }
})
export default Search