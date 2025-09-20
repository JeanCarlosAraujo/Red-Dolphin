import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "ChatList">;

const chats = [
  
  { id: "1", name: "Finn Bro", lastMsg: "amigo, devuelvenos a BMO 😡😡", avatar: "https://i1.sndcdn.com/artworks-yvhZmcDKS2O3uHfh-z2eEAQ-t500x500.jpg" },
  { id: "2", name: "Gunteralorg", lastMsg: "cuak cuak cuak 4 cuak", avatar: "https://www.clipartmax.com/png/middle/290-2905284_gangsta-gunter-by-seignemartin-gunter-adventure-time-art.png" },
  { id: "3", name: "El Licho", lastMsg: "destruiremos la 4ta dimension, vienes?", avatar: "https://pm1.aminoapps.com/6289/abc64d381dbc3b8d7f4351be33678c29b8089485_hq.jpg" },
  { id: "4", name: "Fantasmin", lastMsg: "Amigo la juntada estuvo buena,pero donde esta mi carro", avatar: "https://static.wikia.nocookie.net/regularshow/images/a/a8/Fantasmano_dispara_todas_las_chelas_by_kol98-d5l7tf8.png/revision/latest?cb=20130615230851&path-prefix=es" },
  { id: "5", name: "Viejo", lastMsg: "que hay de nuevo viejo?", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvTVNFZ5gGHQkIDbSy_yT81E-bdAy7cR1Og&s" },
  { id: "6", name: "RigiRigi", lastMsg: "necesito ayuda con unos arboles que caminan", avatar: "https://images.cults3d.com/_wOF8tZj7foGar9OSd8pL_5wf60=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/22680130/illustration-file/b4e9e40d-2ff0-402b-aae2-50afe5331635/tbrender.png" },
  { id: "7", name: "Mordo", lastMsg: "margarita me dejo otra vez 😔😔", avatar: "https://i.pinimg.com/originals/51/e9/a5/51e9a52f8a061a560925605c816a41b8.jpg" },
];

export default function ChatListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        
        {/* temporal para mostrar la devuelta al inicion */}
        <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={{ color: "#f4efefff", fontSize: 18 }}>←</Text>
                </TouchableOpacity>
        </View>


        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/616/616408.png" }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>RedDolphin</Text>
      </View>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate("Chat", { name: item.name, avatar: item.avatar })}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.lastMsg}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7e0c9" },
  header: { flexDirection: "row", alignItems: "center", backgroundColor: "#b22222", padding: 15 },
  logo: { width: 30, height: 30, marginRight: 10 },
  headerText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  chatItem: { flexDirection: "row", padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontWeight: "bold" },
});
