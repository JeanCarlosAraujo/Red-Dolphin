import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/616/616408.png" }}
        style={styles.logo}
      />
      <Text style={styles.title}>RedDolphin</Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("ChatList")}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => navigation.navigate("ChatList")}
      >
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/281/281764.png" }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Login With Google</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>New User? </Text>
        <Text style={styles.signup}>Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f7e0c9" },
  logo: { width: 70, height: 70, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: "bold", color: "#b22222", marginBottom: 20 },
  input: { width: "80%", backgroundColor: "#fff", padding: 12, borderRadius: 8, marginVertical: 5 },
  loginButton: { backgroundColor: "#b22222", padding: 12, borderRadius: 8, width: "80%", marginTop: 10 },
  loginText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  orText: { marginVertical: 10 },
  googleButton: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#b22222", padding: 10, borderRadius: 8, width: "80%", justifyContent: "center" },
  googleIcon: { width: 20, height: 20, marginRight: 10 },
  googleText: { color: "#b22222", fontWeight: "bold" },
  footer: { flexDirection: "row", marginTop: 20 },
  signup: { color: "#b22222", fontWeight: "bold" },
});
