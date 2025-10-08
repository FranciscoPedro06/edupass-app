import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { ArrowLeft } from "react-native-feather";

export const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back}
              activeOpacity={0.7}
            >
              <ArrowLeft stroke="#0000FF" width={28} height={28} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Termo de Compromisso</Text>
            <View style={styles.placeholder} />
          </View>
  );
};