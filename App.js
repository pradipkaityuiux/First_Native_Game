import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import Colors from './Constants/colors';

export default function App() {
  const [validNumber, setValidNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  let screen = <StartGameScreen onValidNumber={setValidNumber}/>;

  if(validNumber) {
    screen = <GameScreen number={validNumber} handleGameOver={gameOverHandler}/>;
  }

  if(gameOver) {
    screen = <GameOverScreen onValidNumber={setValidNumber}/>;
  }

  function gameOverHandler() {
    setGameOver(true);
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
