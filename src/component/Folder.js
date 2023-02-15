import { View, Text } from 'react-native'
import React from 'react'
import Lesson from "./Lesson"

const Folder = ({props}) => {

  return (
    <View>
      <Lesson props={props}/>
    </View>
  )
}

export default Folder