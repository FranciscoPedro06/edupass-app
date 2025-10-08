import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";


export const Header = () => {
    return (
        <View style={styles.headerSection}>
        <Text style={styles.title}>Iniciar a verificação</Text>
        <Text style={styles.description}>
            Este processo foi criado para confirmar sua identidade e proteger
            você contra roubo de identidade.
        </Text>
        </View>
                )};