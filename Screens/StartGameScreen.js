import { View, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../Components/ui/PrimaryButton'
import Colors from '../Constants/colors'

export default function StartGameScreen({onValidNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''))
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
      return;
    }
    onValidNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  return (
    <View style={{marginTop: 50, width: '80%', alignItems: 'center'}}>
        <TextInput keyboardType='number-pad' placeholder='Enter a Number' placeholderTextColor={Colors.placeholder} style={styles.numberInput} maxLength={2} value={enteredNumber} onChangeText={numberInputHandler}/>
        <PrimaryButton action={confirmInputHandler} bgColor={Colors.btnPrimary} setStyle={{ width: '100%' }}>Confirm</PrimaryButton>
        <PrimaryButton action={resetInputHandler}  bgColor={Colors.btnSecondary} setStyle={{ width: '100%' }}>Reset</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  numberInput: {
    width: '100%',
    borderBottomColor: Colors.inputColor,
    borderBottomWidth: 2,
    marginBottom: 20,
    fontSize: 40,
    padding: 5,
    textAlign: 'center',
    color: Colors.inputColor,
  }
})