import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";


export default function Button() {
  const handleIniciar = () => {
    // Navegar para a tela de captura de selfie
    //router.push('CapturaSelfie');
  };
    return(
        <TouchableOpacity
            style={styles.startButton}
            onPress={handleIniciar}
            activeOpacity={0.8}
        >
            <Text style={styles.startButtonText}>Iniciar</Text>
        </TouchableOpacity>
    )
};