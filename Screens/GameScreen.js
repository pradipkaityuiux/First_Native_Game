import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Title from '../Components/ui/Title'
import GuessNumber from '../Components/game/GuessNumber'
import PrimaryButton from '../Components/ui/PrimaryButton'
import { Ionicons } from '@expo/vector-icons'


export default function GameScreen({number, handleGameOver}) {
  let minBoundary = 1;
  let maxBoundary = 100;

  const initialGuess = generateRandomNumber(1, 100, number);
  const [currrentGuess, setCurrentGuess] = useState(initialGuess);

  function generateRandomNumber(min, max, exclude) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    if (randomNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }
  
  
  function nextGuessHandler(direction) {
    if((direction === 'lower' && currrentGuess < number) || (direction === 'higher' && currrentGuess > number)) {
      Alert.alert("Don't Lie!", "You know that this is wrong...", [{text: 'Sorry!', style: 'cancel'}]);
      return;
    }
    if(direction === 'lower') {
      maxBoundary = currrentGuess;
    }else{
      minBoundary = currrentGuess+1;
    }
    const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currrentGuess);
    console.log(minBoundary, maxBoundary, newRandomNumber);
    setCurrentGuess(newRandomNumber);
  } 

  useEffect(() => {
    if(currrentGuess === number) {
      handleGameOver();
      return;
    }
  }, [currrentGuess, number, handleGameOver])

  return (
    <View style={styles.screen}>
      <Title type='primary'>Opponent's Guess</Title>
      <GuessNumber>{currrentGuess}</GuessNumber>
      <View style={styles.guessScreen}>
        <Title type='secondary'>Higher or Lower</Title>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <PrimaryButton action={() => nextGuessHandler('higher')} bgColor={'green'}  setStyle={{ width: '45%' }}><Ionicons name="arrow-up-sharp" size={24} color="white" /></PrimaryButton>
          <PrimaryButton action={() => nextGuessHandler('lower')} bgColor={'red'}  setStyle={{ width: '45%' }}><Ionicons name="arrow-down-sharp" size={24} color="white" /></PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24
  },
  guessScreen: {
    marginTop: 40
  }
})