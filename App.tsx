import React, { useState } from "react";
import PantallaLogin from "./pantallas/PantallaLogin";
import PantallaSignUp from "./pantallas/PantallaSignUp";
import PantallaListaChats from "./pantallas/PantallaListaChats";
import PantallaChat from "./pantallas/PantallaChat";
import PantallaPerfil from "./pantallas/PantallaPerfil";
import PantallaAgregarContacto from "./pantallas/PantallaAgregarContacto";

type ChatActual = { nombre: string; uid: string; chatId: string };

export default function App() {
  const [pantalla, setPantalla] = useState<"login"|"signup"|"chats"|"chat"|"perfil"|"agregar">("login");
  const [chatActual, setChatActual] = useState<ChatActual | null>(null);

  if (pantalla === "login")
    return <PantallaLogin irAChats={() => setPantalla("chats")} irASignUp={() => setPantalla("signup")} />;

  if (pantalla === "signup")
    return <PantallaSignUp irALogin={() => setPantalla("login")} irAChats={() => setPantalla("chats")} />;

  if (pantalla === "perfil")
    return <PantallaPerfil irALogin={() => setPantalla("login")} />;
  
  if (pantalla === "agregar")
    return <PantallaAgregarContacto volverAChats={() => setPantalla("chats")} />; 

  if (pantalla === "chat" && chatActual)
    return <PantallaChat
             nombre={chatActual.nombre}
             contactoUid={chatActual.uid}
             chatId={chatActual.chatId}
             volver={() => setPantalla("chats")}
           />;

  return (
    <PantallaListaChats
      irAChat={(nombre, uid, chatId) => { setChatActual({ nombre, uid, chatId }); setPantalla("chat"); }}
      irAPerfil={() => setPantalla("perfil")}
      irAAgregar={() => setPantalla("agregar")}
    />
  );
}
