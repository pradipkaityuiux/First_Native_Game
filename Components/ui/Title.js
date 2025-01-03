import { Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../Constants/colors'

export default function Title({children, type}) {
  return <Text style={[styles.title, type=='primary' ? styles.primary : styles.secondary ]}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    marginBottom: 24
  },
  primary: {
    fontSize: 36,
    color: colors.textPrimary
  },
  secondary: {
    fontSize: 24,
    color: colors.btnPrimary
  }
})