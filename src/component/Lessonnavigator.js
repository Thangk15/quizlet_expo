import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import OptionTest from '../screen/OptionTest';

const Stack = createStackNavigator();
const LessonNavigator
 = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            title:"",
            headerTintColor:"white",
            headerTitleAlign:"center",
            headerStyle:{
                backgroundColor:"#2E3856",
            }

        }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Option" component={OptionTest} />
        </Stack.Navigator>

      );
  }
  export default LessonNavigator


