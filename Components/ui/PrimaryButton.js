import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Constants/colors'

export default function PrimaryButton({children, action, bgColor, setStyle}) {
  return (
    <Pressable onPress={action} style={({pressed})=> pressed ? [styles.button, { backgroundColor: bgColor }, styles.isPressed, setStyle] : [styles.button, { backgroundColor: bgColor }, setStyle]} android_ripple={{color: Colors.ripple}}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    paddingBlock: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,

    // Apply shadow
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  isPressed: {
    opacity: 0.8
  }
})