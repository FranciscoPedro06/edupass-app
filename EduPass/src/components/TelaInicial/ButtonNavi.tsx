import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { IconName } from "@/src/app/Admin/TelaInicial";

interface MenuItem {
  icon: IconName;
  label: string;
  screen: string;
  active?: boolean;
}

interface ButtonNaviProps {
  bottomNavItems: MenuItem[];
  handleMenuPress: (screen: string) => void;
  IconComponent: React.ComponentType<{
    name: IconName;
    color: string;
    size: number;
  }>;
}

export const ButtonNavi: React.FC<ButtonNaviProps> = ({
  bottomNavItems,
  handleMenuPress,
  IconComponent,
}) => (
  <SafeAreaView style={{ backgroundColor: "#0000FF" }}>
    <View style={styles.bottomNavContainer}>
      <View style={styles.bottomNav}>
        {bottomNavItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bottomNavItem}
            onPress={() => handleMenuPress(item.screen)}
            activeOpacity={0.8}
          >
            <IconComponent
              name={item.icon}
              color={item.active ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)"}
              size={24} // 🔹 Tamanho original (reduzido)
            />
            <Text
              style={[
                styles.bottomNavLabel,
                item.active ? styles.bottomNavLabelActive : undefined,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </SafeAreaView>
);
