import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Remember } from '../components/Remeber';
import { Signup } from '../components/Signup';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>EduPass</Text>
          <Text style={styles.subTitle}>Seja Bem Vindo!</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          {/* Email Input */}
           <Input placeholder='Email' value={email} onChangeText={setEmail}  autoCapitalize="none"/>
          
          {/* Password Input */}
          <Input placeholder='Senha' value={password} onChangeText={setPassword}  secureTextEntry={!showPassword}  autoCapitalize="none"/>
          
          {/* Remember Me & Forgot Password */}
          <Remember rememberMe={rememberMe} setRememberMe={setRememberMe} onPress1={() => alert("Recuperar senha!")} onPress2={()=> setShowPassword(!showPassword)} />

          {/* Login Button */}
          <Button title="Entrar" onPress={() => router.push('/TermoCompromisso/termo') } />

          {/* Sign Up Link */}
          <Signup onPress={() => router.push('/Aluno/CadastroEstudante')} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  icon: {
    marginRight: 10,
  },

});