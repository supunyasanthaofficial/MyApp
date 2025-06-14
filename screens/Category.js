import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Category({ route }) {
  const { categoryName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName} Category</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
