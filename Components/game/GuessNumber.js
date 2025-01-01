import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Constants/colors'

export default function GuessNumber({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.btnSecondary,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.btnSecondary
    }
})