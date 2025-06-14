import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [items, setItems] = useState([
    { id: "1", name: "Item 1", price: 10.99 },
    { id: "2", name: "Item 2", price: 15.99 },
  ]);

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleSubmitOrder = () => {
    if (!customerName.trim() || !customerEmail.trim()) {
      Alert.alert("Missing Information", "Please enter name and email.");
      return;
    }

    const orderDetails = {
      customerName,
      customerEmail,
      items,
      total: calculateTotal(),
    };

    console.log("Order Submitted:", orderDetails);
    Alert.alert("Order Submitted", "Thank you for your order!");

    setCustomerName("");
    setCustomerEmail("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Back Button ABOVE all content */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Order Screen</Text>

        <Text style={styles.label}>Customer Name</Text>
        <TextInput
          style={styles.input}
          value={customerName}
          onChangeText={setCustomerName}
          placeholder="Enter name"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Customer Email</Text>
        <TextInput
          style={styles.input}
          value={customerEmail}
          onChangeText={setCustomerEmail}
          placeholder="Enter email"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <Text style={styles.subHeader}>Items</Text>
        {items.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          </View>
        ))}

        <Text style={styles.total}>Total: ${calculateTotal()}</Text>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitOrder}
        >
          <Text style={styles.submitButtonText}>Submit Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#2e2e2e",
  },
  scrollContent: {
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  backButton: {
    position: "absolute",
    top: 58,
    left: 15,
    zIndex: 100,
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    color: "#000",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    color: "#000",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#fff",
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OrderScreen;
