import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";


export const Button = () => {
    const [accepted, setAccepted] = useState(false);
    const handleAccept = () => {
        if (accepted) {
          // Exemplo: voltar para o dashboard
          router.push('/Verificacao/verificacao');
          Alert.alert('Obrigado!', 'Você aceitou os termos de uso.');
        }
      };
    return(
         <View style={styles.bottomSection}>
                      <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setAccepted(!accepted)}
                        activeOpacity={0.7}
                      >
                        <View style={[styles.checkbox, accepted && styles.checkboxChecked]}>
                          {accepted && <View style={styles.checkboxInner} />}
                        </View>
                        <Text style={styles.checkboxLabel}>
                          Li e concordo com o termo de uso.
                        </Text>
                      </TouchableOpacity>
        
                      <TouchableOpacity
                        style={[
                          styles.acceptButton,
                          !accepted && styles.acceptButtonDisabled,
                        ]}
                        onPress={handleAccept}
                        disabled={!accepted}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.acceptButtonText}>Concordo</Text>
                      </TouchableOpacity>
                    </View>
    );
}