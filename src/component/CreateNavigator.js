import { View, Text } from 'react-native'
import React from 'react'
import Create from '../screen/Create'
import CreateFolder from '../screen/CreateFolder'
import { createStackNavigator } from '@react-navigation/stack'
import OptionTest from '../screen/OptionTest'
const Stack = createStackNavigator()
const CreateNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='create' screenOptions={{
        headerShown:false
    }} >
        <Stack.Screen name='create' component={Create} />
        <Stack.Screen name='createfolder' component={CreateFolder} />
        <Stack.Screen name='option' component={OptionTest}/>
    </Stack.Navigator>
  )
}

export default CreateNavigator