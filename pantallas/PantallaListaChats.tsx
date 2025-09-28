import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import Encabezado from "../componentes/Encabezado";
import ItemChat from "../componentes/ItemChat";
import { auth, db } from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { generarIdChat, obtenerResumenChat, crearChatSiNoExiste } from "../servicios/chatService";

type PropsListaChats = {
  irAChat: (nombre: string, uid: string, chatId: string) => void;
  irAPerfil: () => void;
  irAAgregar: () => void;
};

type Contacto = {
  uid: string;
  nombre: string;
  apellido?: string;
  lastMessage?: string;
};

const PantallaListaChats: React.FC<PropsListaChats> = ({ irAChat, irAPerfil, irAAgregar }) => {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const usuario = auth.currentUser;

  useEffect(() => {
    if (!usuario) return;
    const contactosRef = collection(db, "usuarios", usuario.uid, "contactos");
    const unsub = onSnapshot(contactosRef, async (snapshot) => {
      const lista = await Promise.all(
        snapshot.docs.map(async (d) => {
          const data = d.data() as any;
          const contactoUid = data.uid;
          const nombre = data.nombre || "";
          const apellido = data.apellido || "";
          // obtener resumen del chat si existe
          const chatId = generarIdChat(usuario.uid, contactoUid);
          const resumen = await obtenerResumenChat(chatId);
          return {
            uid: contactoUid,
            nombre,
            apellido,
            lastMessage: resumen?.lastMessage || "",
          } as Contacto;
        })
      );
      setContactos(lista);
    });
    return () => unsub();
  }, []);

  const abrirChat = async (c: Contacto) => {
    if (!usuario) return;
    const chatId = generarIdChat(usuario.uid, c.uid);
    await crearChatSiNoExiste(chatId, [usuario.uid, c.uid]);
    irAChat(c.nombre || c.uid, c.uid, chatId);
  };

  return (
    <View style={estilos.contenedor}>
      
      <Encabezado titulo="RedDolphin" logo={require("../assets/RedDolphinRojo.png")} />
      <TouchableOpacity onPress={irAPerfil} style={{ padding: 10 }}>
        <Text style={{ color: "blue" }}>ir a mi perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={irAAgregar} style={{ padding: 10 }}>
        <Text style={{ color: "blue" }}>agregar contacto</Text>
      </TouchableOpacity>

      <FlatList
        data={contactos}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <ItemChat
            avatar={require("../usuarios/finn.png")}
            nombre={item.nombre || item.uid}
            mensaje={item.lastMessage || "sin mensajes aún"}
            alPresionar={() => abrirChat(item)}
          />
        )}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FAEBD7",
    padding: 10,
  },
});

export default PantallaListaChats;
