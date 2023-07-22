import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({fName,lName})=> {
    return (
        <View>
            <Text>Your First Name is {fName}! and Last name is {lName}! </Text>
        </View>
    )
}

const CustomText = () => {
  return (
    <View>
      <MyCustomTextWith fName="Nuttachai" lName="Phusadeekunpaisan"/>
      <MyCustomTextWith fName="Paisan" lName="Kiatjanon"/>
        
    </View>
  )
}

export default CustomText