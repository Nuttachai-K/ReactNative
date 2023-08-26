import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatListAPI from './components/FlatListAPI';
import News from './components/News';
import ProductScreen from './components/ProductScreen';


export default function App() {
  return (
    <View>
      <ProductScreen/>
    </View>
  );
}

const styles = StyleSheet.create({})
 