import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function FastFoodScreen() {
  const fastFoodItems = [
    {
      id: "1",
      name: "Pizza ",
      image: require("../assets/pizza slice.png"),
      color: "#4CAF50",
    },
    {
      id: "2",
      name: "Taco ",
      image: require("../assets/taco (1).png"),
      color: "#F44336",
    },
    {
      id: "3",
      name: "Chinese ",
      image: require("../assets/chinese noodle.png"),
      color: "#FF9800",
    },
    {
      id: "4",
      name: "Chicken ",
      image: require("../assets/chicken.png"),
      color: "#2196F3",
    },
  ];

  const renderFastFoodItem = ({ item }) => (
    <View style={[styles.fastFoodItem, { backgroundColor: item.color }]}>
      <Text style={styles.fastFoodText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fast Food</Text>
      <FlatList
        data={fastFoodItems}
        renderItem={renderFastFoodItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.fastFoodList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  fastFoodList: {
    paddingHorizontal: 20,
  },
  fastFoodItem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
