import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RandomUserScreen from './components/RandomUserScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <RandomUserScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center'   
  }
 })
 