import React from "react";
import { TextInput, StyleSheet } from "react-native";
// Importamos React para poder usar JSX y crear componentes funcionales
// Importamos TextInput (campo de texto) y StyleSheet (para aplicar estilos) de React Native
//Un input q se usa para que el usuario escriba correo y contraseña en el login.

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
type PropsCampo = {
  marcador: string; // Texto de placeholder
  esClave?: boolean; // Si es campo de contraseña
};
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

// Declaramos el componente funcional CampoEntrada que recibe las props definidas arriba
const CampoEntrada: React.FC<PropsCampo> = ({ marcador, esClave }) => {
  return (
    <TextInput
      placeholder={marcador}
      secureTextEntry={esClave}
      style={estilos.campo}
    />
  );
};
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
const estilos = StyleSheet.create({
  campo: {
    width: "80%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F0F0F0",
    marginVertical: 8,
  },
});

// Exportamos CampoEntrada para que pueda usarse en las otras pantallas
export default CampoEntrada;
