import React from 'react'
import { Button, TextInput, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View>
        <TextInput placeholder="Enter your card" />
        <Button title="Submit" onPress={() => {}} />
    </View>
  )
}
