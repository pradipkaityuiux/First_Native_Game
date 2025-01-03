import { View, Text, Image, StyleSheet } from 'react-native'
import Title from '../Components/ui/Title'
import colors from '../Constants/colors'
import PrimaryButton from '../Components/ui/PrimaryButton'

export default function GameOverScreen({newGameHandler, rounds, userInput}) {
  return (
    <View style={styles.screen}>
      <Title type='primary'>Game Over</Title>
      <Image source={require('../assets/images/success.png')} style={styles.image}/>
      <View style={styles.textWrapper}>
        <Title type='secondary'>Your phone needed <Text style={styles.textHighlight1}> {rounds} </Text> rounds to guess the number <Text style={styles.textHighlight2}> {userInput} </Text></Title>
      </View>
      <PrimaryButton action={newGameHandler} bgColor={colors.btnPrimary}>Start New Game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  textWrapper: {
    marginTop: 50,
    paddingHorizontal: 40,
  },
  textHighlight1: {
    fontFamily: 'open-sans-bold',
    backgroundColor: colors.btnSecondary,
    color: colors.textColor
  },
  textHighlight2: {
    fontFamily: 'open-sans-bold',
    backgroundColor: colors.btnPrimary,
    color: colors.textColor
  }
})