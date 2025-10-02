import React, { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';

export function Input({ ...rest }: TextInputProps) {

  return (
     <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#999"
                  {...rest}
                />
      </View>
  );
}