import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    posts: 42,
    followers: 128,
    following: 76,
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      whatsapp: "https://whatsapp.com",
    },
  };

  const theme = {
    background: isDarkMode ? "#1a1a1a" : "#f5f5f5",
    text: isDarkMode ? "#ffffff" : "#000000",
    subText: isDarkMode ? "#b3b3b3" : "#666666",
    headerBorder: isDarkMode ? "#333333" : "#eeeeee",
    cardBackground: isDarkMode ? "#2d2d2d" : "#ffffff",
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.headerBorder }]}>
        <View style={styles.headerSide}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerItem}
          >
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerCenter}>
          <Text style={[styles.headerTitle, { color: theme.text }]}>
            Profile
          </Text>
        </View>

        <View style={styles.headerSideRight}>
          <TouchableOpacity
            onPress={() => setIsDarkMode(!isDarkMode)}
            style={styles.headerItem}
          >
            <Ionicons
              name={isDarkMode ? "sunny-outline" : "moon-outline"}
              size={24}
              color={theme.text}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerItem}
            onPress={() => setSettingsVisible(true)}
          >
            <Ionicons name="settings-outline" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <View style={styles.contentWrapper}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={[styles.name, { color: theme.text }]}>{user.name}</Text>
          <Text style={[styles.email, { color: theme.subText }]}>
            {user.email}
          </Text>
        </View>

        <View
          style={[
            styles.statsContainer,
            { borderTopColor: theme.headerBorder },
          ]}
        >
          <View style={styles.stat}>
            <Text style={[styles.statNumber, { color: theme.text }]}>
              {user.posts}
            </Text>
            <Text style={[styles.statLabel, { color: theme.subText }]}>
              Posts
            </Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statNumber, { color: theme.text }]}>
              {user.followers}
            </Text>
            <Text style={[styles.statLabel, { color: theme.subText }]}>
              Followers
            </Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statNumber, { color: theme.text }]}>
              {user.following}
            </Text>
            <Text style={[styles.statLabel, { color: theme.subText }]}>
              Following
            </Text>
          </View>
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL(user.social.facebook)}
          >
            <FontAwesome
              name="facebook"
              size={24}
              color={theme.text}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(user.social.instagram)}
          >
            <FontAwesome
              name="instagram"
              size={24}
              color={theme.text}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(user.social.whatsapp)}
          >
            <FontAwesome
              name="whatsapp"
              size={24}
              color={theme.text}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.editButton,
            { backgroundColor: isDarkMode ? "#0a84ff" : "#007AFF" },
          ]}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Settings Modal */}
      {settingsVisible && (
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setSettingsVisible(false)}
        >
          <View
            style={[
              styles.settingsMenu,
              { backgroundColor: theme.cardBackground },
            ]}
          >
            <TouchableOpacity
              style={styles.settingsItem}
              onPress={() => {
                setSettingsVisible(false);
                navigation.navigate("AccountSettings");
              }}
            >
              <Text style={{ color: theme.text }}>Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settingsItem}
              onPress={() => {
                setSettingsVisible(false);
                navigation.navigate("Notifications");
              }}
            >
              <Text style={{ color: theme.text }}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settingsItem}
              onPress={() => {
                setSettingsVisible(false);
                alert("Logged out!");
              }}
            >
              <Text style={{ color: "red" }}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  headerSide: {
    width: 60,
    justifyContent: "flex-start",
  },
  headerSideRight: {
    flexDirection: "row",
    width: 80,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerItem: {
    padding: 10,
    zIndex: 1,
  },
  contentWrapper: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    width: "100%",
  },
  stat: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
  socialIcon: {
    marginHorizontal: 20,
  },
  editButton: {
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  modalOverlay: {
    position: "absolute",
    top: 60,
    right: 10,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
  settingsMenu: {
    position: "absolute",
    top: 60,
    right: 20,
    width: 180,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  settingsItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
