import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Chat">;

export default function ChatScreen({ route, navigation }: Props) {
  const { name, avatar } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "#f4efefff", fontSize: 18 }}>←</Text>
        </TouchableOpacity>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.messages}>
        <Text style={styles.msgGray}>Amigo, devuelvenos a BMO 😡😡</Text>
        <Text style={styles.msgGreen}>primero q todo buenos dias</Text>
        <Text style={styles.msgGreen}>segun la fiesta de ayer gue increible</Text>
        <Text style={styles.msgGreen}>tercero, no lo devolvere por ahora, me esta cocinando</Text>
        <Text style={styles.msgGray}>😡😡</Text>
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.placeholder}>Escribe un mensaje...</Text>
        <Text style={styles.send}>➤</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7e0c9" },
  header: { flexDirection: "row", alignItems: "center", backgroundColor: "#b22222", padding: 15 },
  avatar: { width: 30, height: 30, borderRadius: 15, marginLeft: 10 },
  name: { color: "#fff", marginLeft: 10, fontSize: 18, fontWeight: "bold" },
  messages: { flex: 1, padding: 15 },
  msgGray: { alignSelf: "flex-start", backgroundColor: "#ddd", padding: 10, borderRadius: 8, marginVertical: 5 },
  msgGreen: { alignSelf: "flex-end", backgroundColor: "#b2f2bb", padding: 10, borderRadius: 8, marginVertical: 5 },
  inputArea: { flexDirection: "row", alignItems: "center", borderTopWidth: 1, borderTopColor: "#ccc", padding: 10 },
  placeholder: { flex: 1, color: "#999" },
  send: { fontSize: 20, color: "#b22222", fontWeight: "bold" },
});
