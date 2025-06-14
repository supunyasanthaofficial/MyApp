import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function RateScreen() {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    console.log("Submitted Rating:", rating);
    console.log("Comment:", comment);
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      return (
        <TouchableOpacity key={index} onPress={() => setRating(starValue)}>
          <Text
            style={[
              styles.star,
              { color: rating >= starValue ? "#FFD700" : "#888" },
            ]}
          >
            ★
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.topTitle}>Rate Your Food</Text>
      </View>

      <Text style={styles.subtitle}>
        Your feedback helps us improve our food and delivery service
      </Text>

      <View style={styles.ratingContainer}>{renderStars()}</View>

      <TextInput
        style={styles.commentInput}
        placeholder="Leave your comments here"
        placeholderTextColor="#888"
        multiline
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  topTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  star: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  commentInput: {
    backgroundColor: "#444",
    color: "#FFF",
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  submitButton: {
    paddingHorizontal: 20,
    backgroundColor: "#DAA520",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  submitText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
