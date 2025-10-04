import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Dashboard: undefined;
  Details: { id: string };
};

type TermosScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

interface TermosScreenProps {
  navigation: TermosScreenNavigationProp;
}

export default function TermosScreen({ navigation }: TermosScreenProps) {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (accepted) {
      // Exemplo: voltar para o dashboard
      navigation.navigate('Dashboard');
      Alert.alert('Obrigado!', 'Você aceitou os termos de uso.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <ArrowLeft stroke="#0000FF" width={28} height={28} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Termo</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Main content with blue background */}
      <View style={styles.mainContent}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            {/* Scrollable content area */}
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator
            >
              <View style={styles.textContent}>
                <Text style={styles.mainTitle}>
                  TERMO DE CONCORDÂNCIA E PRIVACIDADE
                </Text>

                <Text style={styles.paragraph}>
                  Ao utilizar este aplicativo e fornecer seus dados pessoais, você concorda de forma livre, informada e inequívoca com a coleta, uso, armazenamento e tratamento das informações, conforme estabelecido pela Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
                </Text>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>1. Finalidade do Uso dos Dados:</Text>
                  <Text style={styles.paragraph}>
                    Os dados fornecidos serão utilizados exclusivamente para:
                    Identificação e cadastro de usuários; Comunicação e envio de informações solicitadas; Melhorias nos serviços oferecidos pelo site; Cumprimento de obrigações legais e regulatórias.
                  </Text>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>2. Segurança das Informações:</Text>
                  <Text style={styles.paragraph}>
                    Adotamos medidas de segurança administrativas e tecnológicas para proteger seus dados contra acessos não autorizados, perdas ou vazamentos.
                  </Text>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>3. Compartilhamento de Dados:</Text>
                  <Text style={styles.paragraph}>
                    Seus dados não serão compartilhados com terceiros sem sua autorização prévia, exceto em cumprimento de obrigação legal.
                  </Text>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>4. Direitos do Titular:</Text>
                  <Text style={styles.paragraphBold}>Você tem o direito de:</Text>
                  <Text style={styles.paragraph}>Acessar, corrigir ou atualizar seus dados;</Text>
                  <Text style={styles.paragraph}>Solicitar exclusão de dados;</Text>
                  <Text style={styles.paragraph}>
                    Revogar este consentimento a qualquer momento, por meio de solicitação formal.
                  </Text>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>5. Armazenamento dos Dados:</Text>
                  <Text style={styles.paragraph}>
                    Os dados serão mantidos pelo tempo necessário para atender às finalidades informadas, sendo eliminados de forma segura ao final do prazo legal.
                  </Text>
                </View>

                <Text style={[styles.paragraph, styles.finalParagraph]}>
                  Ao clicar em "Concordo", você declara ter lido e aceitado este Termo de Concordância e Privacidade.
                </Text>
              </View>
            </ScrollView>

            {/* Fixed bottom section */}
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
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 4,
    borderColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#0000FF' },
  placeholder: { width: 56 },
  mainContent: {
    flex: 1,
    backgroundColor: '#0000FF',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  cardContainer: { flex: 1, maxWidth: 672, alignSelf: 'center', width: '100%' },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 48,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 12,
  },
  scrollView: { flex: 1 },
  scrollContent: { paddingHorizontal: 32, paddingVertical: 40 },
  textContent: { gap: 24 },
  mainTitle: { fontSize: 20, fontWeight: 'bold', color: '#111827', marginBottom: 8 },
  paragraph: { fontSize: 16, lineHeight: 24, color: '#111827' },
  paragraphBold: { fontSize: 16, lineHeight: 24, color: '#111827', fontWeight: '600' },
  section: { marginTop: 16, gap: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
  finalParagraph: { marginTop: 16 },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 32,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    gap: 24,
  },
  checkboxContainer: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#9CA3AF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkboxChecked: { backgroundColor: '#0000FF', borderColor: '#0000FF' },
  checkboxInner: { width: 12, height: 12, backgroundColor: '#FFFFFF', borderRadius: 2 },
  checkboxLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    lineHeight: 22,
  },
  acceptButton: {
    backgroundColor: '#006400',
    paddingVertical: 20,
    borderRadius: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  acceptButtonDisabled: { backgroundColor: '#D1D5DB' },
  acceptButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
});
