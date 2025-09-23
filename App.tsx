import React, { useState } from "react";
import PantallaLogin from "./pantallas/PantallaLogin";
import PantallaListaChats from "./pantallas/PantallaListaChats";
import PantallaChat from "./pantallas/PantallaChat";

export default function App() {
  const [pantalla, setPantalla] = useState<"Login" | "ListaChats" | "Chat">("Login");
  const [chatSeleccionado, setChatSeleccionado] = useState<string>("");

  if (pantalla === "Login") {
    return <PantallaLogin irAListaChats={() => setPantalla("ListaChats")} />;
  }

  if (pantalla === "ListaChats") {
    return <PantallaListaChats irAChat={(nombre)=>{setChatSeleccionado(nombre); setPantalla("Chat");}} />;
  }

  if (pantalla === "Chat") {
    return <PantallaChat nombre={chatSeleccionado} volver={()=>setPantalla("ListaChats")} />;
  }

  return null;
}
