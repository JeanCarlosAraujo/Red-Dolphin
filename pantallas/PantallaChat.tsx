import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import { auth } from "../firebase/firebaseConfig";
import BurbujaMensaje from "../componentes/BurbujaMensaje";
import { escucharMensajes, enviarMensaje } from "../servicios/chatService";

type Props = {
  nombre: string;
  contactoUid: string;
  chatId: string;
  volver: () => void;
};

const PantallaChat: React.FC<Props> = ({ nombre, contactoUid, chatId, volver }) => {
  const [mensajes, setMensajes] = useState<any[]>([]);
  const [texto, setTexto] = useState("");
  const usuarioUid = auth.currentUser?.uid || "";

  useEffect(() => {
    // escucha en tiempo real
    const unsubscribe = escucharMensajes(chatId, (msgs) => {
      setMensajes(msgs);
    });
    return () => unsubscribe();
  }, [chatId]);

  const manejarEnviar = async () => {
    if (!texto.trim()) return;
    await enviarMensaje(chatId, usuarioUid, texto.trim());
    setTexto("");
  };

  return (
    <View style={estilos.contenedor}>
      <View style={estilos.header}>
        <TouchableOpacity onPress={volver}><Text style={{color:"#B22222", fontSize:30}}>{"<"} volver</Text></TouchableOpacity>
        <Text style={estilos.titulo}>{nombre}</Text>
      </View>

      <FlatList
        data={mensajes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BurbujaMensaje texto={item.texto} esRemitente={item.remitente === usuarioUid} />
        )}
        contentContainerStyle={{ padding: 10 }}
      />

      <View style={estilos.inputRow}>
        <TextInput
          placeholder="Escribe un mensaje..."
          style={estilos.input}
          value={texto}
          onChangeText={setTexto}
        />
        <TouchableOpacity onPress={manejarEnviar} style={estilos.sendBtn}>
          <Text style={{ color: "white", fontWeight: "bold" }}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#FAEBD7" },
  header: { padding: 10, flexDirection: "row", alignItems: "center", backgroundColor: "#fff" },
  titulo: { marginLeft: 10, fontWeight: "bold", fontSize: 18, color: "#B22222" },
  inputRow: { flexDirection: "row", padding: 10, borderTopWidth: 1, borderColor: "#ddd", backgroundColor: "#fff" },
  input: { flex: 1, backgroundColor: "#E0E0E0", borderRadius: 20, paddingHorizontal: 12 },
  sendBtn: { marginLeft: 8, backgroundColor: "#B22222", padding: 12, borderRadius: 20, justifyContent: "center", alignItems: "center" },
});

export default PantallaChat;
