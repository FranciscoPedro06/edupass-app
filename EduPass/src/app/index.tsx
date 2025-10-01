import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to EduPass!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#67159C', // Um roxo da Rocketseat! 😉
  },
});