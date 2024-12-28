import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import PrimaryButton from '../Components/PrimaryButton'

export default function StartGameScreen() {
  return (
    <View style={{marginTop: 50, width: '80%', alignItems: 'center'}}>
        <TextInput keyboardType='number-pad' placeholder='Enter a Number' placeholderTextColor={'#C4DAD2'} style={styles.numberInput} maxLength={2}/>
        <PrimaryButton title='Confirm' action={() => console.log('Confirm')} bgColor='#365486'/>
        <PrimaryButton title='Reset' action={() => console.log('Reset now')}  bgColor='#ECB159'/>
    </View>
  )
}

const styles = StyleSheet.create({
    numberInput: {
        width: '100%',
        borderBottomColor: '#003C43',
        borderBottomWidth: 2,
        marginBottom: 20,
        fontSize: 40,
        padding: 5,
        textAlign: 'center',
        color: '#003C43'
    }
})