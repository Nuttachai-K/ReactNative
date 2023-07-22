import { StyleSheet, Text, View, TextInput ,Button} from "react-native";
import React, { useState } from "react";

export default function Login() {
  const checkTextInput = () => {
    if (!textInputName.trim()) {
      alert("Plese Enter Name");
      return;
    }
    if (!textInputEmail.trim()){
        alert("Plese Enter Email");
        return;
    }
    if ((textInputEmail.split('@')).length != 2) {
        alert("Plese Enter correct Email");
        return;
    }
    alert("Success")
  };

  const [textInputName, setName] = useState("");
  const [textInputEmail, setEmail] = useState("");

  return (
    <View style = {styles.container}>
      <TextInput
        placeholder="Enter Name"
        style={styles.textInputStyle}
        value={textInputName}
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <TextInput
        placeholder="Enter Email"
        style={styles.textInputStyle}
        value={textInputEmail}
        onChangeText={(value) => {
          setEmail(value);
        }}
      />
      <Text>{'\n'}</Text>
       <Button  
        title='Submit'
        onPress={checkTextInput}
        color="#888888"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    color: 'grey'
  },
});
