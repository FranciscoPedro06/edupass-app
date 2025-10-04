import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  User,
  Calendar,
  UserPlus,
  UserCheck,
  UserX,
  Award,
  Bell,
  Users,
} from "react-native-feather";

import {
  Bus,
  QrCode,
  GraduationCap,
} from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Header } from "../../components/TelaInicial/header";
import { Menu } from "@/src/components/TelaInicial/menu";
import { ButtonNavi } from "@/src/components/TelaInicial/ButtonNavi";


// Ícones dinâmicos
const icons = {
  User,
  Calendar,
  Bus,
  UserPlus,
  UserCheck,
  UserX,
  QrCode,
  GraduationCap,
  Award,
  Bell,
  Users,
};

// gera tipo com as chaves válidas
export type IconName = keyof typeof icons;

interface IconComponentProps {
  name: IconName;
  color: string;
  size: number;
}

export const IconComponent: React.FC<IconComponentProps> = ({ name, color, size }) => {
  const Icon = icons[name];
  return <Icon stroke={color} width={size} height={size} />;
};

// Tipos para menus
interface MenuItem {
  icon: IconName;
  label: string;
  screen: string;
  crossed?: boolean;
  empty?: boolean;
  active?: boolean; // para o bottom nav
}

// Menus principais
const menuItems: MenuItem[] = [
  { icon: "User", label: "Perfil", screen: "Perfil" },
  { icon: "Calendar", label: "Horários", screen: "Horarios" },
  { icon: "Bus", label: "Rotas", screen: "Rotas" },
  { icon: "UserPlus", label: "Cadastrar estudante", screen: "CadastroEstudante" },
  { icon: "UserCheck", label: "Estudantes", screen: "Estudantes" },
  { icon: "UserX", label: "Excluir estudante", screen: "ExcluirEstudante" },
  { icon: "QrCode", label: "Gerar ID do estudante", screen: "GerarID" },
  { icon: "GraduationCap", label: "Cadastrar instituição", screen: "CadastrarInstituicao" },
  { icon: "GraduationCap", label: "Instituições", screen: "Instituicoes" },
  { icon: "GraduationCap", label: "Excluir instituição", screen: "ExcluirInstituicao", crossed: true },
  { icon: "Award", label: "Cadastrar motorista", screen: "CadastrarMotorista" },
  { icon: "Award", label: "Motoristas", screen: "Motoristas" },
  { icon: "Award", label: "Excluir motorista", screen: "ExcluirMotorista"},
];

// Bottom nav
const bottomNavItems: MenuItem[] = [
  { icon: "UserCheck", label: "Estudantes", screen: "Estudantes", active: true },
  { icon: "User", label: "Perfil", screen: "Perfil" },
  { icon: "Calendar", label: "Horários", screen: "Horarios" },
  { icon: "Bus", label: "Rotas", screen: "Rotas" },
];

type RootStackParamList = {
  Dashboard: undefined;
  Details: { id: string }; // exemplo de rota com params
};

type DashboardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Dashboard"
>;

export default function DashboardScreen({
  navigation,
}: {
  navigation: DashboardScreenNavigationProp;
}) {


    function handleMenuPress(screen: string): void {
        throw new Error("Function not implemented.");
    }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Conteúdo principal */}
      <Menu menuItens={menuItems} handleMenuPress={handleMenuPress} IconComponent={IconComponent} />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
         <ButtonNavi  bottomNavItems={bottomNavItems} handleMenuPress={handleMenuPress} IconComponent={IconComponent} />
      </View>
    </SafeAreaView>
  );
}

// Estilos (iguais ao que você já tinha)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
