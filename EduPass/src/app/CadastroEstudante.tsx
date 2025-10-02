// EXPO VERSION - CadastroScreen
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { router, useRouter } from 'expo-router';




export default function CadastroScreen() {
    type FileAsset = {
    name?: string;
    uri: string;
    size?: number;
    mimeType?: string;
    };


  const [formData, setFormData] = useState<{
  rgCpfEstudante: string;
  comprovanteResidencia: FileAsset | null;
  tituloEleitor: FileAsset | null;
  comprovanteMatricula: FileAsset | null;
  foto3x4: FileAsset | null;
  rgCpfResponsavel: string;
  cartaoVacina: FileAsset | null;
}>({
  rgCpfEstudante: '',
  comprovanteResidencia: null,
  tituloEleitor: null,
  comprovanteMatricula: null,
  foto3x4: null,
  rgCpfResponsavel: '',
  cartaoVacina: null,
});

 

  // Selecionar documento
  const pickDocument = async (field: string) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        setFormData(prev => ({
          ...prev,
          [field]: result.assets[0],
        }));
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível selecionar o arquivo');
    }
  };

  // Tirar foto (foto 3x4)
  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permissão necessária', 'Precisamos de acesso à câmera');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData(prev => ({
        ...prev,
        foto3x4: result.assets[0],
      }));
    }
  };

  // Escolher da galeria
  const pickImage = async (field: string) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setFormData(prev => ({
        ...prev,
        [field]: result.assets[0],
      }));
    }
  };

  const handleSubmit = () => {
    Alert.alert('Sucesso', 'Cadastro concluído!');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Feather name="arrow-left" size={28} color="#0000FF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cadastro</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Estudante</Text>

            {/* RG / CPF DO ESTUDANTE */}
            <TextInput
              style={styles.textInput}
              placeholder="RG / CPF DO ESTUDANTE"
              placeholderTextColor="#999"
              value={formData.rgCpfEstudante}
              onChangeText={(text) =>
                setFormData(prev => ({ ...prev, rgCpfEstudante: text }))
              }
              keyboardType="numeric"
            />

            {/* COMPROVANTE DE RESIDÊNCIA */}
            <TouchableOpacity
              style={styles.fileInput}
              onPress={() => pickDocument('comprovanteResidencia')}
            >
              <Text style={styles.fileInputText}>
                {formData.comprovanteResidencia?.name || 'COMPROVANTE DE RESIDÊNCIA'}
              </Text>
            </TouchableOpacity>

            {/* TÍTULO DE ELEITOR */}
            <TouchableOpacity
              style={styles.fileInput}
              onPress={() => pickDocument('tituloEleitor')}
            >
              <Text style={styles.fileInputText}>
                {formData.tituloEleitor?.name || 'TÍTULO DE ELEITOR'}
              </Text>
            </TouchableOpacity>

            {/* COMPROVANTE DE MATRÍCULA */}
            <TouchableOpacity
              style={styles.fileInput}
              onPress={() => pickDocument('comprovanteMatricula')}
            >
              <Text style={styles.fileInputText}>
                {formData.comprovanteMatricula?.name || 'COMPROVANTE DE MATRÍCULA'}
              </Text>
            </TouchableOpacity>

            {/* FOTO 3X4 */}
            <TouchableOpacity
              style={styles.fileInput}
              onPress={() => {
                Alert.alert(
                  'Foto 3x4',
                  'Escolha uma opção',
                  [
                    { text: 'Tirar Foto', onPress: takePhoto },
                    { text: 'Escolher da Galeria', onPress: () => pickImage('foto3x4') },
                    { text: 'Cancelar', style: 'cancel' },
                  ]
                );
              }}
            >
              <Text style={styles.fileInputText}>
                {formData.foto3x4?.uri ? 'Foto selecionada' : 'FOTO 3X4'}
              </Text>
            </TouchableOpacity>

            {/* RG / CPF DO RESPONSÁVEL */}
            <TextInput
              style={styles.textInput}
              placeholder="RG / CPF DO RESPONSÁVEL"
              placeholderTextColor="#999"
              value={formData.rgCpfResponsavel}
              onChangeText={(text) =>
                setFormData(prev => ({ ...prev, rgCpfResponsavel: text }))
              }
              keyboardType="numeric"
            />

            {/* CARTÃO DE VACINA */}
            <TouchableOpacity
              style={styles.fileInput}
              onPress={() => pickDocument('cartaoVacina')}
            >
              <Text style={styles.fileInputText}>
                {formData.cartaoVacina?.name || 'CARTÃO DE VACINA'}
              </Text>
            </TouchableOpacity>

            {/* Submit */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Concluído</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#0000FF' },
  placeholder: { width: 56 },
  mainContent: { flex: 1, backgroundColor: '#0000FF' },
  scrollContent: { padding: 20, paddingTop: 40, paddingBottom: 40 },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 40,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 24,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#0000FF',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 24,
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    marginBottom: 16,
  },
  fileInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#0000FF',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileInputText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  submitButton: {
    backgroundColor: '#0000FF',
    borderRadius: 25,
    paddingVertical: 18,
    marginTop: 24,
    alignItems: 'center',
    shadowColor: '#0000FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  submitButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
});
