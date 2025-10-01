import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Button';


export default function home() {
  return (
    <><View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao EduPass!</Text>
    </View>
    <View style={styles.container}>
        <Button title="Entrar" onPress={() => alert('Login efetuado!')} />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0004F9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
});