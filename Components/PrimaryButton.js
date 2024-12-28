import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function PrimaryButton({title, action, bgColor}) {
  return (
    <Pressable onPress={action} style={({pressed})=> pressed ? [styles.button, { backgroundColor: bgColor }, styles.isPressed] : [styles.button, { backgroundColor: bgColor }]} android_ripple={{color: 'rgba(255, 255, 255, 0.3)'}}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        color: 'white',
        paddingBlock: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,

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