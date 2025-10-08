import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export const Scroll = () => {
    return (
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
        )};