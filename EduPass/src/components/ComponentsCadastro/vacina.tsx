import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Vacina = ({
  FormData,
  setFormData,
  pickDocument,
}: {
  FormData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  pickDocument: (field: string) => Promise<void>;
}) => (
    <TouchableOpacity
        style={styles.fileInput}
        onPress={() => pickDocument('cartaoVacina')}
    >
        <Text style={styles.fileInputText}>
        {FormData.cartaoVacina?.name || 'CARTÃO DE VACINA'}
        </Text>
    </TouchableOpacity>
);