import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screen/Login'
import BottomTab from './BottomTab'
import Register from '../screen/Register'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{
      headerShown:false
    }} >
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen name={'TabBar'} component={BottomTab} />
    </Stack.Navigator>
  )
}

export default AuthNavigator