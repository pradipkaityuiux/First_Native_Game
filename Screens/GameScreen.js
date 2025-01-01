import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Title from '../Components/ui/Title'
import GuessNumber from '../Components/game/GuessNumber'

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

export default function GameScreen({number}) {
  const initialGuess = generateRandomNumber(1, 100, number);
  const [currrentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title type='primary'>Opponent's Guess</Title>
      <GuessNumber>{currrentGuess}</GuessNumber>
      <View style={styles.guessScreen}>
        <Title type='secondary'>Higher or Lower</Title>
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