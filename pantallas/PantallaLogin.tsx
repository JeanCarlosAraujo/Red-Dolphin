import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CampoEntrada from "../componentes/CampoEntrada";

type PropsLogin = {
  irAListaChats: () => void;
};

const PantallaLogin: React.FC<PropsLogin> = ({ irAListaChats }) => {
  return (
    <View style={estilos.contenedor}>
      {/* Logo rojo */}
      <Image source={require("../assets/RedDolphinBlanco.png")} style={estilos.logo} />
      <Text style={estilos.titulo}>RedDolphin</Text>

      {/* Campos */}
      <CampoEntrada marcador="Email" />
      <CampoEntrada marcador="Password" esClave />

      {/* Botón login */}
      <TouchableOpacity style={estilos.botonLogin} onPress={irAListaChats}>
        <Text style={estilos.textoLogin}>Log In</Text>
      </TouchableOpacity>

      <Text style={estilos.o}>or</Text>

      {/* Botón Google */}
      <TouchableOpacity style={estilos.botonGoogle}>
        <Text>Login With Google</Text>
      </TouchableOpacity>

      {/* Registro */}
      <Text style={estilos.registro}>
        New User? <Text style={{color: "red"}}>Sign Up</Text>
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAEBD7"

  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10

  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#B22222"

  },
  botonLogin: {
    backgroundColor: "#B22222",
    padding: 12,
    borderRadius: 8,
    marginTop: 10

  },
  textoLogin: {
    color: "white",
    fontSize: 16

  },
  o: {
    marginVertical: 10

  },
  botonGoogle: {
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    borderRadius: 8

  },
  registro: {
    marginTop: 15

  },
});
export default PantallaLogin;
