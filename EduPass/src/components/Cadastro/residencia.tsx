import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Residencia = ({
    pickDocument,
    FormData,
}: {
    pickDocument: (field: string) => Promise<void>;
    FormData: any;

}) => (
    <TouchableOpacity
        style={styles.fileInput}
        onPress={() => pickDocument('comprovanteResidencia')}
    >
        <Text style={styles.fileInputText}>
        {FormData.comprovanteResidencia?.name || 'COMPROVANTE DE RESIDÊNCIA'}
        </Text>
    </TouchableOpacity>
    
);