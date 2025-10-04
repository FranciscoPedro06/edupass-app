import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Bell, Users } from "react-native-feather";

export const Header = () => {
    return (
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>U</Text>
              </View>
              <Text style={styles.headerTitle}>EduPass</Text>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.iconButton}>
                <Bell stroke="#FFFFFF" width={24} height={24} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Users stroke="#FFFFFF" width={24} height={24} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
)};