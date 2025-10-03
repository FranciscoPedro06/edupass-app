import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Foto3x4 = ({
  FormData,
  takePhoto,
  pickImage,
}: {
  FormData: any;
  takePhoto: () => void;
  pickImage: (field: string) => Promise<void>;
}) => (
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
        {FormData.foto3x4?.uri ? 'Foto selecionada' : 'FOTO 3X4'}
        </Text>
    </TouchableOpacity>

);