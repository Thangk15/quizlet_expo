
import React from 'react';
import Search from '../screen/Search';
import Home from '../screen/Home';
import Create from '../screen/Create';
import CreateNavigator from './CreateNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import LessonNavigator from './Lessonnavigator';
// import CreateNavigator from './CreateNavigator';


const Tab = createBottomTabNavigator()


const BottomTab = () =>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle: styles.tabBarStyle} } >
            <Tab.Screen name = "LessonNavigator" component={LessonNavigator} options={{
                tabBarLabel:"",
                tabBarIcon: () =>{
                    return(
                    <FontAwesome
                    name = "home"
                    size = {24}
                    color = {"#2E3856"}
                    />
                    )
                }
                
            }} />
            <Tab.Screen name = "Search" component={Search} options ={{
                tabBarLabel:"",
                tabBarIcon: ()=>{
                    return(
                        <FontAwesome
                        name = "search"
                        size = {24}
                        color = "#2E3856"
                        />
                    )
                }
            }} />
            <Tab.Screen name = "CreateNav" component={CreateNavigator} options = {{
                tabBarLabel:"",
                tabBarIcon: ()=>{
                    return(
                        <MaterialCommunityIcons
                        name = "plus-circle-outline"
                        size = {24}
                        color = {"#2E3856"}
                        />
                    )
                },
            }} />
            <Tab.Screen name = "StackNav" component={LessonNavigator} options = {{
                tabBarLabel:"",
                tabBarIcon: ()=>{
                    return(
                        <Ionicons
                        name = "person"
                        size = {24}
                        color = "#2E3856"
                        />
                    )
                }
            }} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBarStyle:{
        backgroundColor: "#0A092D"
    }
})
export default BottomTab