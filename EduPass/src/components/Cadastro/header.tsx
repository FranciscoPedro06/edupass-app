import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Feather name="arrow-left" size={28} color="#0000FF" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Cadastro</Text>
      <View style={styles.placeholder} />
    </View>
  );
};
