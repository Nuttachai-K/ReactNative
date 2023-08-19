import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatList_Example1 from './components/FlatList_Example1';
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter';


export default function App() {
  return (
    <View>
     <FlatList_HeaderFooter/>
    </View>
  );
}

const styles = StyleSheet.create({})
 