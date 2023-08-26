import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React, { useState, useEffect } from "react";

import { SafeAreaView } from "react-native-web";

const FlatListAPI = () => {
  const [refreshing, setRefreshing] = useState(true);

  const [dataSource, setDataSource] = useState([]);

  const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())

      .then((responseJson) => {
        setDataSource(responseJson);

        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const getItem = (item) => {
    //Function for click

    alert("Id : " + item.id + " Title : " + item.title);
  };

  const ItemView = ({ item }) => {
    return <Text style={styles.itemStyle} onPress={() => getItem(item)}>{item.title}</Text>;
  };

  const ItemSeparetorView = () => {
    return (
      //FlatList Item Separator

      <View
        style={{
          height: 0.5,

          width: "100%",

          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const onRefresh = () => {
    //Clear old data of the list

    setDataSource([]);

    getData();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {refreshing ? <ActivityIndicator /> : null}

        <FlatList
          data={dataSource}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={ItemSeparetorView}
          renderItem={ItemView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatListAPI;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",

    flex: 1,

    marginTop: 10,
  },

  itemStyle: {
    fontSize: 20,

    padding: 10,
  },
});
