import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

type PropsPerfil = {
  irALogin: () => void;
};

const PantallaPerfil: React.FC<PropsPerfil> = ({ irALogin }) => {
  const usuario = auth.currentUser; // usuario en sesion

  const manejarLogout = async () => {
    await signOut(auth);
    irALogin();
  };

  return (
    <View style={estilos.contenedor}>
      {/* correo del usuario */}
      <Text style={estilos.email}>{usuario?.email}</Text>

      {/* uid del usuario */}
      <Text style={estilos.uid}>{usuario?.uid}</Text>

      <TouchableOpacity onPress={manejarLogout} style={estilos.boton}>
        <Text style={estilos.textoBoton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAEBD7",
  },
  email: { fontSize: 18, marginBottom: 10, color: "#B22222" },
  uid: { fontSize: 14, marginBottom: 20, color: "gray" },
  boton: {
    backgroundColor: "#B22222",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  textoBoton: { color: "white", fontSize: 16 },
});

export default PantallaPerfil;
