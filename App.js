import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatListAPI from './components/FlatListAPI';
import News from './components/News';


export default function App() {
  return (
    <View>
      <News/>
    </View>
  );
}

const styles = StyleSheet.create({})
 