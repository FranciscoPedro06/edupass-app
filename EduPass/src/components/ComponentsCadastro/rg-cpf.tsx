import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const RgCpf = ({
    pickDocument,
    FormData,
}: {
    pickDocument: (field: string) => Promise<void>;
    FormData: any;

}) => (
    <TouchableOpacity
        style={styles.fileInput}
        onPress={() => pickDocument('rg/cpf')}
    >
        <Text style={styles.fileInputText}>
        {FormData.comprovanteResidencia?.name || 'RG/CPF DO RESPONSÁVEL'}
        </Text>
    </TouchableOpacity>
    
);