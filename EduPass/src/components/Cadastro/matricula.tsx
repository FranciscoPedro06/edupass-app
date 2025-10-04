import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Matricula = ({
    pickDocument,
    FormData,
}: {
    pickDocument: (field: string) => Promise<void>;
    FormData: any;

}) => (
    <TouchableOpacity
        style={styles.fileInput}
        onPress={() => pickDocument('comprovanteMatricula')}
    >
        <Text style={styles.fileInputText}>
        {FormData.comprovanteMatricula?.name || 'COMPROVANTE DE MATRÍCULA'}
        </Text>
    </TouchableOpacity>
);