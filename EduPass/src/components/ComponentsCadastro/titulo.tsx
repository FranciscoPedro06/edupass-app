import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Titulo = ({
    pickDocument,
    FormData,
}: {
    pickDocument: (field: string) => Promise<void>;
    FormData: any;

}) => (
    <TouchableOpacity
        style={styles.fileInput}
        onPress={() => pickDocument('tituloEleitor')}
    >
        <Text style={styles.fileInputText}>
        {FormData.tituloEleitor?.name || 'TÍTULO DE ELEITOR'}
        </Text>
    </TouchableOpacity>
);