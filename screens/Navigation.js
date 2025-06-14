// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// // Import your screens
// import HomeScreen from "./screens/HomeScreen";
// import CategoryScreen from "./screens/Category";
// import FastFoodScreen from "./screens/FastFoodScreen";
// import OrdersScreen from "./screens/OrdersScreen";
// import ProfileScreen from "./screens/ProfileScreen";

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === "Home") {
//               iconName = focused ? "home" : "home-outline";
//             } else if (route.name === "Categories") {
//               iconName = focused ? "grid" : "grid-outline";
//             } else if (route.name === "FastFood") {
//               iconName = focused ? "fast-food" : "fast-food-outline";
//             } else if (route.name === "Orders") {
//               iconName = focused ? "receipt" : "receipt-outline";
//             } else if (route.name === "Profile") {
//               iconName = focused ? "person" : "person-outline";
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: "#FF6B35",
//           tabBarInactiveTintColor: "#8E8E93",
//           tabBarStyle: {
//             backgroundColor: "#FFFFFF",
//             borderTopWidth: 1,
//             borderTopColor: "#E5E5E7",
//             height: 90,
//             paddingBottom: 10,
//             paddingTop: 10,
//           },
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontWeight: "600",
//           },
//           headerShown: false,
//         })}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: "Home",
//           }}
//         />
//         <Tab.Screen
//           name="Categories"
//           component={CategoryScreen}
//           options={{
//             tabBarLabel: "Categories",
//           }}
//         />
//         <Tab.Screen
//           name="FastFood"
//           component={FastFoodScreen}
//           options={{
//             tabBarLabel: "Fast Food",
//           }}
//         />
//         <Tab.Screen
//           name="Orders"
//           component={OrdersScreen}
//           options={{
//             tabBarLabel: "Orders",
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             tabBarLabel: "Profile",
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default BottomTabNavigator;
