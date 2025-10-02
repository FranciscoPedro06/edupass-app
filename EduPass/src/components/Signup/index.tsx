import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

interface SignupProps {

  onPress: () => void;
}

export function Signup({ onPress }: SignupProps) {
  return (
        
    <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Ainda não possui cadastro? </Text>
                <TouchableOpacity onPress={onPress}>
                <Text style={styles.signupLink}>Clique aqui</Text>
                </TouchableOpacity>
    
        </View>
  );
}