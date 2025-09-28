// servicios/chatService.ts
import {
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  getDocs,
  limit,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

/**
 * genera un chatId único ordenando los uids
 */
export const generarIdChat = (uidA: string, uidB: string) =>
  [uidA, uidB].sort().join("_");

/**
 * crea documento del chat si no existe
 */
export const crearChatSiNoExiste = async (chatId: string, participantes: string[]) => {
  const chatRef = doc(db, "chats", chatId);
  const snap = await getDoc(chatRef);
  if (!snap.exists()) {
    await setDoc(chatRef, {
      participantes,
      lastMessage: "",
      lastMessageAt: serverTimestamp(),
    });
  }
  return chatRef;
};

/**
 * envia mensaje: guarda en subcoleccion y actualiza lastMessage
 */
export const enviarMensaje = async (chatId: string, remitenteUid: string, texto: string) => {
  const mensajesRef = collection(db, "chats", chatId, "mensajes");
  await addDoc(mensajesRef, {
    remitente: remitenteUid,
    texto,
    createdAt: serverTimestamp(),
  });

  // actualiza resumen del chat
  const chatRef = doc(db, "chats", chatId);
  await updateDoc(chatRef, {
    lastMessage: texto,
    lastMessageAt: serverTimestamp(),
  });
};

/**
 * escucha mensajes en tiempo real, orden ascendente por fecha.
 * devuelve función unsubscribe.
 */
export const escucharMensajes = (chatId: string, callback: (msgs: any[]) => void) => {
  const q = query(collection(db, "chats", chatId, "mensajes"), orderBy("createdAt", "asc"));
  const unsub = onSnapshot(q, (snapshot) => {
    const mensajes = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(mensajes);
  });
  return unsub;
};

/**
 * obtiene el ultimo mensaje del chat (si existe)
 */
export const obtenerResumenChat = async (chatId: string) => {
  const chatRef = doc(db, "chats", chatId);
  const snap = await getDoc(chatRef);
  if (!snap.exists()) return null;
  return snap.data();
};
