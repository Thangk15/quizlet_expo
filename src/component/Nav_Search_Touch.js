import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height
const Nav_Search_Touch = (touch,touch1,setTouch,setTouch1) => {

  return (
    <SafeAreaView>
        <SafeAreaView style={styles.touch_ctn}>
            <TouchableOpacity onPress={() => (setTouch(true),setTouch1(false))} style={touch?styles.touch:styles.ontouch} >
                <Text style={{color:"white",alignSelf:"center", padding:10}}>Lession</Text>
            </TouchableOpacity  >
            <TouchableOpacity onPress={() => ((setTouch(false),setTouch1(true)))} style={touch1?styles.touch:styles.ontouch}>
                <Text style={{color:"white", alignSelf:"center", padding:10}}>Folder</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    touch_ctn:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    touch:{
        width: "50%",
        borderBottomWidth:1,
        borderBottomColor:"white"
    },
    ontouch:{
        width: "50%",
    }
})

export default Nav_Search_Touch