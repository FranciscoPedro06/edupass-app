import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { IconName } from "@/src/app/Admin/TelaInicial";

interface MenuItem {
  icon: IconName;
  label: string;
  screen: string;
  crossed?: boolean;
  empty?: boolean;
}

interface IconComponentProps {
  name: IconName; // <- apenas os nomes que existem no objeto icons
  color: string;
  size: number;
}

interface MatriculaProps {
  menuItens: MenuItem[];
  handleMenuPress: (screen: string) => void;
  IconComponent: React.ComponentType<IconComponentProps>;
}

export const Menu: React.FC<MatriculaProps> = ({
  menuItens,
  handleMenuPress,
  IconComponent,
}) => (
  <ScrollView
    style={styles.mainContent}
    contentContainerStyle={styles.scrollContent}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.card}>
      <View style={styles.grid}>
        {menuItens.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => handleMenuPress(item.screen)}
            activeOpacity={0.7}
          >
            <View style={styles.menuIconContainer}>
              {item.crossed && <View style={styles.crossedLine} />}
              {!item.empty && (
                <IconComponent
                  name={item.icon}
                  color="#0000FF"
                  size={32}
                />
              )}
            </View>
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </ScrollView>
);
