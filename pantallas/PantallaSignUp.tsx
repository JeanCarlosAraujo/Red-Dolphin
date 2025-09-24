import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";

type PropsSignUp = {
  irALogin: () => void;
  irAChats: () => void;
};

const PantallaSignUp: React.FC<PropsSignUp> = ({ irALogin, irAChats }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");

  const manejarSignUp = async () => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, clave);
      // guardar datos en firestore
      await setDoc(doc(db, "users", cred.user.uid), {
        nombre,
        email,
      });
      irAChats();
    } catch (e) {
      console.log("error registro:", e);
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Crear Cuenta</Text>
      <TextInput placeholder="Name" value={nombre} onChangeText={setNombre} style={estilos.campo} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={estilos.campo} />
      <TextInput placeholder="Password" value={clave} secureTextEntry onChangeText={setClave} style={estilos.campo} />

      <TouchableOpacity onPress={manejarSignUp} style={estilos.boton}>
        <Text style={estilos.textoBoton}>Sing Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={irALogin}>
        <Text style={estilos.link}>ya tengo cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FAEBD7" },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  campo: { width: "80%", backgroundColor: "#E0E0E0", padding: 10, borderRadius: 10, marginVertical: 8 },
  boton: { backgroundColor: "#B22222", padding: 12, borderRadius: 10, marginTop: 15 },
  textoBoton: { color: "white", fontSize: 16 },
  link: { marginTop: 10, color: "#B22222" },
});

export default PantallaSignUp;
