import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

type PropsAgregarContacto = {
  volverAChats: () => void; // nueva prop para regresar
};

const PantallaAgregarContacto: React.FC<PropsAgregarContacto> = ({ volverAChats }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [uidContacto, setUidContacto] = useState("");

  const guardarContacto = async () => {
    const usuarioActual = auth.currentUser;
    if (!usuarioActual) return;

    if (!nombre || !uidContacto) {
      Alert.alert("Error", "El nombre y el id de usuario son obligatorios");
      return;
    }

    try {
      const contactoDoc = doc(db, "usuarios", usuarioActual.uid, "contactos", uidContacto);
      await setDoc(contactoDoc, {
        nombre,
        apellido,
        uid: uidContacto,
      });

      Alert.alert("Éxito", "Contacto agregado correctamente");
      setNombre("");
      setApellido("");
      setUidContacto("");
    } catch (error) {
      console.log("error guardando contacto: ", error);
      Alert.alert("Error", "No se pudo guardar el contacto");
    }
  };

  return (
    <View style={estilos.contenedor}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={estilos.input}
      />
      <TextInput
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
        style={estilos.input}
      />
      <TextInput
        placeholder="Id del usuario"
        value={uidContacto}
        onChangeText={setUidContacto}
        style={estilos.input}
      />

      <TouchableOpacity onPress={guardarContacto} style={estilos.boton}>
        <Text style={estilos.textoBoton}>Guardar</Text>
      </TouchableOpacity>

      {/* Botón extra para volver a chats */}
      <TouchableOpacity onPress={volverAChats} style={[estilos.boton, { backgroundColor: "#7b7373ff" }]}>
        <Text style={estilos.textoBoton}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FAEBD7",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "#E0E0E0",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  boton: {
    backgroundColor: "#B22222",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    width: "60%",
    alignItems: "center",
  },
  textoBoton: { color: "white", fontSize: 16 },
});

export default PantallaAgregarContacto;
