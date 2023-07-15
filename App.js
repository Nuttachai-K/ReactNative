import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxsWithColorAndText from './components/ViewBoxsWithColorAndText'
import DisplayAndImage from './components/DisplayAndImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import CustomText from './components/CustomText';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewBoxsWithColorAndText/> */}
      {/* <DisplayAndImage/> */}
      {/* <LotsOfGreeting/> */}
      <CustomText/>
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
 