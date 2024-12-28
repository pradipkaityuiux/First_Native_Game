import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
