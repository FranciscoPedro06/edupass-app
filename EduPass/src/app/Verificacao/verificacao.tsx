// REACT NATIVE VERSION
import  Button  from '@/src/components/Verificacao/button'
import { Card } from '@/src/components/Verificacao/card';
import { Header } from '@/src/components/Verificacao/header';
import { router } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Shield } from 'react-native-feather';

export default function VerificacaoScreen() {
  const handleIniciar = () => {
    console.log('[v0] Starting verification process');
    // Navegar para a tela de captura de selfie
    //router.push('CapturaSelfie');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Heading */}
        <Header />

        {/* Prepare Card */}
        <Card />

        {/* Start Button */}
        <Button />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
    justifyContent: 'space-between',
  },


 
});