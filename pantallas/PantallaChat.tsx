import React from "react";// importa react para poder usar componentes funcionales
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";
//importa componentes basicos de react native como view (contenedor), textinput (campo de texto), touchableopacity (boton tactil), text (mostrar texto), image (mostrar imagen)
import Encabezado from "../componentes/Encabezado";
//importa el componente de encabezado que ya esta hecho en la carpeta componentes
import BurbujaMensaje from "../componentes/BurbujaMensaje";
//importa el componente burbuja de mensaje para mostrar mensajes del chat

// se definen las props que recibira este componente
type PropsChat = {
  nombre: string;// el nombre del usuario con el que se chatea
  volver: () => void;// funcion para volver atras
};

// componente funcional que representa la pantalla del chat
const PantallaChat: React.FC<PropsChat> = ({ nombre, volver }) => {
  return (
    <View style={estilos.contenedor}>
      {/* vista principal que ocupa toda la pantalla y aplica estilos de fondo */}
      
      <Encabezado
        titulo={nombre}// titulo del encabezado sera el nombre recibido por props
        logo={require("../usuarios/finn.png")}// logo fijo de usuario que se carga de la carpeta usuarios
        alVolver={volver}// funcion que se ejecuta al darle a volver
      />

      <View style={estilos.chat}>
        <BurbujaMensaje texto="traeme a BMO!!!" esRemitente={false} />
        <BurbujaMensaje texto="hols" esRemitente={true} />
        <BurbujaMensaje texto="no quiero" esRemitente={true} />
      </View>

      <View style={estilos.entrada}>
        <TextInput placeholder="Escribe un mensaje" style={estilos.campo} />
        <TouchableOpacity>
          <Text style={estilos.enviar}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FAEBD7"

  },
  chat: {
    flex: 1,
    padding: 10

  },
  entrada: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center"

  },
  campo: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    paddingHorizontal: 10

  },
  enviar: {
    fontSize: 20,
    color: "#B22222",
    marginLeft: 8

  },
});
export default PantallaChat;

