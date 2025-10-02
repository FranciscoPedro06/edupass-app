import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

type RememberProps = {
  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
  onPress1: () => void;
  onPress2: () => void;
};


export function Remember({ rememberMe, setRememberMe, onPress1, onPress2 }: RememberProps) {
  return (
    <View style={styles.rememberContainer}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={onPress2}
      >
        <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
        <Text style={styles.rememberText}>👁 Mostrar senha</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onPress1}>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
}
