import React from "react";
// importa react para crear componentes funcionales
import { View, StyleSheet } from "react-native";
// importa view (contenedor) y stylesheet (para los estilos) desde react native
import Encabezado from "../componentes/Encabezado";
// importa el componente encabezado que muestra un titulo y un logo en la parte superior
import ItemChat from "../componentes/ItemChat";
// importa el componente itemchat que representa cada fila de chat en la lista

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// se definen las props que recibira esta pantalla
type PropsListaChats = {
  irAChat: (nombre: string) => void;
  // funcion que recibe un nombre y sirve para navegar o cambiar a la pantalla del chat
};
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// componente funcional que representa la pantalla con la lista de chats
const PantallaListaChats: React.FC<PropsListaChats> = ({ irAChat }) => {
  return (
    <View style={estilos.contenedor}>
    {/* vista principal que envuelve toda la pantalla y aplica el estilo contenedor */}
      <Encabezado titulo="RedDolphin" logo={require("../assets/RedDolphinRojo.png")} />
      {/* el caht de finn */}
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
