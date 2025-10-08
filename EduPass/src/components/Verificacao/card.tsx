import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Shield } from "react-native-feather";


export const Card = () => {
    return(
    <View style={styles.prepareCard}>
        <Shield stroke="#1F2937" width={32} height={32} />
        <Text style={styles.prepareText}>PREPARA-SE PARA TIRAR A SELFIE</Text>
    </View>

)};