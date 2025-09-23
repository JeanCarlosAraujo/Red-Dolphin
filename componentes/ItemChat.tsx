import React from "react";
//dibuja una fila de chat dentro de la lista principal muestra
//la foto del contacto
// y nmbre del contacto}
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//dibuja una fila de chat dentro de la lista principal muestra
//la foto del contacto
// y nmbre del contacto}
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//declara el componente funcional ItemChat
//le dice que usara las props de tipo PropsItemChat
//desestructuras directamente las props (avatar, nombre, mensaje, alPresionar) para usarlas dentro
type PropsItemChat = {
  avatar: any; // Imagen del contacto
  nombre: string; // Nombre del contacto
  mensaje: string; // Último mensaje
  alPresionar?: () => void; // Función al tocar el chat
};
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
const ItemChat: React.FC<PropsItemChat> = ({ avatar, nombre, mensaje, alPresionar }) => {
  //touchableOpacity → hace que el ítem se pueda presionar
  //aplica el estilo contenedor (fila con padding y borde inferior)
  //onPress={alPresionar} → si alguien toca este chat, se ejecuta la función pasada como prop
  return (
    <TouchableOpacity style={estilos.contenedor} onPress={alPresionar}>
      <Image source={avatar} style={estilos.avatar} />
  {/* Un View que agrupa el nombre y el mensaje en una sola columna.
      Gracias al flex: 1, ocupa todo el espacio restante a la derecha del avatar. */}
      <View style={estilos.contenedorTexto}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Text numberOfLines={1} style={estilos.mensaje}>{mensaje}</Text>
      </View>
    </TouchableOpacity>
  );
};

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

const estilos = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  contenedorTexto: { flex: 1 },
  nombre: { fontWeight: "bold" },
  mensaje: { color: "gray" },
});

export default ItemChat;
