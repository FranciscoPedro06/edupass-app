import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,

} from 'react-native';

import { Header } from '@/src/components/TermoCompromisso/header';
import { Scroll } from '@/src/components/TermoCompromisso/scroll';
import { Button } from '@/src/components/TermoCompromisso/Button';


export default function TermosScreen() {
    return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Main content with blue background */}
      <View style={styles.mainContent}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            {/* Scrollable content area */}
            <Scroll />
            {/* Fixed bottom section */}
            <Button/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  
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
});
