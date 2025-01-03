import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import Colors from './Constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [validNumber, setValidNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  let screen = <StartGameScreen onValidNumber={setValidNumber}/>;

  const [fontLoading] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontLoading) {
    return <AppLoading/>
  }

  if(validNumber) {
    screen = <GameScreen number={validNumber} handleGameOver={gameOverHandler} handleRounds={setRounds}/>;
  }

  if(gameOver) {
    screen = <GameOverScreen rounds={rounds} userInput={validNumber} newGameHandler={handleNewGame}/>;
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  function handleNewGame() {
    setValidNumber(null);
    setGameOver(false);
    setRounds(0);
  }

  return (
    <>
      <LinearGradient colors={[...Colors.gradient]} style={styles.container}>
        <SafeAreaView style={styles.rootLayout}>
          {screen}
        </SafeAreaView>
      </LinearGradient>
      <StatusBar style="light" backgroundColor={Colors.statusbar}/>
    </>
  );
}

const styles = StyleSheet.create({
  rootLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
