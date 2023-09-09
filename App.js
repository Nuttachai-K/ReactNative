import { View, Text } from "react-native";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";

import DetailsScreen from "./screens/DetailsScreen";

import IndexScreen from "./screens/IndexScreen";
import CreatePostScreen from "./screens/CreatePostScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode = 'model'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#7AAAAA",
          },

          headerTintColor: "#fff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name = 'Index' component={IndexScreen} options={{title:"Main Page"}}
        />

        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
