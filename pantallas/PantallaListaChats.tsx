import React from "react";
// importa react para crear componentes funcionales
import { View, StyleSheet, Text } from "react-native";
// importa view (contenedor), stylesheet (para los estilos) y text desde react native
import Encabezado from "../componentes/Encabezado";
// importa el componente encabezado que muestra un titulo y un logo en la parte superior
import ItemChat from "../componentes/ItemChat";
// importa el componente itemchat que representa cada fila de chat en la lista
import { TouchableOpacity } from "react-native";
import { auth } from "../firebase/firebaseConfig";
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// se definen las props que recibira esta pantalla
type PropsListaChats = {
  irAChat: (nombre: string) => void;
  irAPerfil: () => void;
};

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// componente funcional que representa la pantalla con la lista de chats
const PantallaListaChats: React.FC<PropsListaChats> = ({ irAChat, irAPerfil }) => {
  return (
    <View style={estilos.contenedor}>
    {/* vista principal que envuelve toda la pantalla y aplica el estilo contenedor */}
      <Encabezado titulo="RedDolphin" logo={require("../assets/RedDolphinRojo.png")} />
      {/* el caht de finn */}
      <TouchableOpacity onPress={irAPerfil} style={{ padding: 10 }}>
        <Text style={{ color: "blue" }}>ir a mi perfil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={irAPerfil} style={{padding: 10}}>
        <Text style={{ color: "blue" }}>ir a agregado</Text>
      </TouchableOpacity>

      <ItemChat
        avatar={require("../usuarios/finn.png")}
        nombre="Finn Bro"
        mensaje="amigo, devuelvenos a BMO 😡😡"
        alPresionar={() => irAChat("Finn Bro")}
      />
      {/* el caht de gunter */}
      <ItemChat
        avatar={require("../usuarios/gunter.png")}
        nombre="Gunteralorg"
        mensaje="cuak cuak cuak 4 cuak"
      />
    </View>
  );
};
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FAEBD7"

  },
});


// exporta la pantalla para q pueda ser usada en la app
export default PantallaListaChats;
