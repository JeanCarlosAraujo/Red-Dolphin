import React, { useState } from "react";
import PantallaLogin from "./pantallas/PantallaLogin";
import PantallaSignUp from "./pantallas/PantallaSignUp";
import PantallaListaChats from "./pantallas/PantallaListaChats";
import PantallaChat from "./pantallas/PantallaChat";
import PantallaPerfil from "./pantallas/PantallaPerfil";

export default function App() {
  const [pantalla, setPantalla] = useState<"login"|"signup"|"chats"|"chat"|"perfil">("login");
  const [chatActual, setChatActual] = useState<string>("");

  if (pantalla === "login")
    return <PantallaLogin irAChats={() => setPantalla("chats")} irASignUp={() => setPantalla("signup")} />;

  if (pantalla === "signup")
    return <PantallaSignUp irALogin={() => setPantalla("login")} irAChats={() => setPantalla("chats")} />;

  if (pantalla === "perfil")
    return <PantallaPerfil irALogin={() => setPantalla("login")} />;

  if (pantalla === "chat")
    return <PantallaChat nombre={chatActual} volver={() => setPantalla("chats")} />;

  return <PantallaListaChats irAChat={(n) => { setChatActual(n); setPantalla("chat"); }} irAPerfil={() => setPantalla("perfil")} />;
}
