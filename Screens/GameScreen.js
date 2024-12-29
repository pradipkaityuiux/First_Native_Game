import { View, Text } from 'react-native'
import React from 'react'

export default function GameScreen({number}) {
  return (
    <View>
      <Text>GameScreen</Text>
      <Text>{number}</Text>
    </View>
  )
}