// Importamos React y componentes de React Native
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//Es la barra superior que muestra
//el logoo y el icono de retroseso


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// Definimos las props que recibirá este componente
type PropsEncabezado = {
  titulo: string; // Texto que aparece en el encabezado
  logo: any; // Imagen que se muestra en el encabezado
  alVolver?: () => void; // Función opcional para volver atrás
};

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// Componente funcional
const Encabezado: React.FC<PropsEncabezado> = ({ titulo, logo, alVolver }) => {
  return (
    <View style={estilos.contenedor}>
      {alVolver && ( // Si existe la función alVolver mostramos la flecha de regreso
        <TouchableOpacity onPress={alVolver}>
          <Text style={estilos.volver}>{"<"}</Text>
        </TouchableOpacity>
      )}
      {/* Logo */}
      <Image source={logo} style={estilos.logo} />
      {/* Título */}
      <Text style={estilos.titulo}>{titulo}</Text>
    </View>
  );
};

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// Estilos
const estilos = StyleSheet.create({
  contenedor: {
    flexDirection: "row", // Coloca elementos en fila
    alignItems: "center", // Centra verticalmente
    backgroundColor: "#8c1f1fff", // Rojo vino
    padding: 10,
  },
  volver: {
    color: "white",
    fontSize: 50,
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 8,
    resizeMode: "contain",
  },
  titulo: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Encabezado;
