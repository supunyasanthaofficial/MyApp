import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Pizza from "../assets/Kawaii.png";
import Burger from "../assets/Hamburger.png";
import Taco from "../assets/Taco.png";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
  const categories = [
    { id: "1", name: "Pizza", image: Pizza, color: "#FFCC80" },
    { id: "2", name: "Burger", image: Burger, color: "#F48FB1" },
    { id: "3", name: "Taco", image: Taco, color: "#A5D6A7" },
  ];

  const specialMenus = [
    {
      id: "1",
      name: "The Taco Company",
      rating: "4.8",
      price: "$$$",
      color: "#FFE0B2",
    },
    {
      id: "2",
      name: "The Burger Company",
      rating: "4.6",
      price: "$$$",
      color: "#F8BBD0",
    },
    {
      id: "3",
      name: "The Pizza Company",
      rating: "3.8",
      price: "$$$",
      color: "#C5E1A5",
    },
    {
      id: "4",
      name: "The KFC Company",
      rating: "7.8",
      price: "$$$",
      color: "#FFCDD2",
    },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      onPress={() => console.log(`${item.name} category pressed`)}
    >
      <View style={[styles.categoryItem, { backgroundColor: item.color }]}>
        <Image
          source={item.image}
          style={styles.categoryImage}
          resizeMode="contain"
        />
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSpecialMenu = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Category", { categoryName: item.name });
        console.log(`${item.name} special menu pressed`);
      }}
    >
      <View style={[styles.specialMenuItem, { backgroundColor: item.color }]}>
        <Text style={styles.specialMenuText}>{item.name}</Text>
        <Text style={styles.specialMenuDetails}>
          ⭐ {item.rating} • {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Back Button + Search Bar Row */}
      <View style={styles.topRow}>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#FFF"
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}
        <View style={styles.searchBarContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#AAA"
            style={styles.leftIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Dishes, restaurants or cuisines"
            placeholderTextColor="#AAA"
          />
          <View style={styles.rightContainer}>
            <View style={styles.separator} />
            <Ionicons
              name="briefcase-outline"
              size={20}
              color="#AAA"
              style={styles.rightIcon}
            />
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Popular categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />

      <Text style={styles.sectionTitle}>Today's special menu</Text>
      <FlatList
        data={specialMenus}
        renderItem={renderSpecialMenu}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.specialMenuList}
      />

      <Text style={styles.sectionTitle}>Featured restaurants</Text>
      <View style={styles.featuredRestaurant}>
        <Text style={styles.featuredText}></Text>
        <Image
          source={require("../assets/KFC Chicken.png")}
          style={styles.featuredImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About Us</Text>
        <Text style={styles.aboutText}>
          We deliver delicious food from your favorite local restaurants
          straight to your door. Quality, speed, and satisfaction are what we
          promise.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    paddingTop: 40,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#444",
    borderRadius: 40,
    paddingHorizontal: 15,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    color: "#FFF",
    padding: 10,
    fontSize: 16,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: "#666",
    marginHorizontal: 10,
  },
  rightIcon: {
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  categoryList: {
    paddingHorizontal: 30,
  },
  categoryItem: {
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  specialMenuList: {
    paddingHorizontal: 20,
  },
  specialMenuItem: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginHorizontal: 10,
  },
  specialMenuText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    textAlign: "center",
  },
  specialMenuDetails: {
    fontSize: 14,
    color: "#000",
  },
  featuredRestaurant: {
    backgroundColor: "#8D6E63",
    height: 150,
    marginHorizontal: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  featuredText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  aboutSection: {
    backgroundColor: "#3E3E3E",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: "#CCCCCC",
    lineHeight: 20,
  },
});
