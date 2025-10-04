// EXPO VERSION - CadastroScreen
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { RgCpf } from '../../components/Cadastro/rg-cpf';
import { Vacina } from '../../components/Cadastro/vacina';
import { Button } from '../../components/Button';
import { Foto3x4 } from '../../components/Cadastro/foto3x4';
import { Matricula } from '../../components/Cadastro/matricula';
import { Titulo } from '../../components/Cadastro/titulo';
import { Residencia } from '../../components/Cadastro/residencia';
import { RgCpfEstu } from '../../components/Cadastro/rg-cpf-estudante';
import { Header } from '../../components/Cadastro/header';




export default function CadastroScreen() {
    type FileAsset = {
    name?: string;
    uri: string;
    size?: number;
    mimeType?: string;
    };


  const [formData, setFormData] = useState<{
  rgCpfEstudante: FileAsset | null;
  comprovanteResidencia: FileAsset | null;
  tituloEleitor: FileAsset | null;
  comprovanteMatricula: FileAsset | null;
  foto3x4: FileAsset | null;
  rgCpfResponsavel: FileAsset | null;
  cartaoVacina: FileAsset | null;
}>({
  rgCpfEstudante: null,
  comprovanteResidencia: null,
  tituloEleitor: null,
  comprovanteMatricula: null,
  foto3x4: null,
  rgCpfResponsavel: null,
  cartaoVacina: null,
});

 

  // Selecionar documento
  const pickDocument = async (field: string) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf'],
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
      <Header/>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Estudante</Text>

            {/* RG / CPF DO ESTUDANTE */}
            <RgCpfEstu pickDocument={pickDocument} FormData={formData} />

            {/* COMPROVANTE DE RESIDÊNCIA */}
            <Residencia pickDocument={pickDocument} FormData={formData} />

            {/* TÍTULO DE ELEITOR */}
            <Titulo pickDocument={pickDocument} FormData={formData} />

            {/* COMPROVANTE DE MATRÍCULA */}
           <Matricula pickDocument={pickDocument} FormData={formData} />

            {/* FOTO 3X4 */}
            <Foto3x4 FormData={formData} takePhoto={takePhoto} pickImage={pickImage} />

            {/* RG / CPF DO RESPONSÁVEL */}
            <RgCpf pickDocument={pickDocument} FormData={formData} />

            {/* CARTÃO DE VACINA */}
            <Vacina FormData={formData} setFormData={setFormData} pickDocument={pickDocument} />

            {/* Submit */}
            <Button title="Finalizar Cadastro" onPress={handleSubmit} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },

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
  
});
