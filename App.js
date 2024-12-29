import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './Screens/GameScreen';

export default function App() {
  const [validNumber, setValidNumber] = useState(null);
  let screen = <StartGameScreen onValidNumber={setValidNumber}/>;

  if(validNumber) {
    screen = <GameScreen number={validNumber}/>;
  }

  return (
    <>
      <LinearGradient colors={['#FFF7F1', '#DFF2EB']} style={styles.container}>
        {screen}
      </LinearGradient>
      <StatusBar style="light" backgroundColor='#758694'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
