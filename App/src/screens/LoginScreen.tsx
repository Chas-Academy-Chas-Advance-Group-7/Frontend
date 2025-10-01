import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import GradientButton from "../components/GradientButton";
import { colors } from "../styles/colors";
import Header from "../components/Header";

const LoginScreen = () => {
  const { login } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const success = await login(username, password);
    if (!success) {
      Alert.alert("Login failed", "Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.loginForm}>
        <TextInput
          placeholder="Användarnamn"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Lösenord"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          autoCapitalize="none"
        />
        <GradientButton
          colors={[colors.buttonGradientLeft, colors.buttonGradientRight]}
          title="Logga in"
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40 },
  loginForm: {
    marginTop: 80,
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    padding: 8,
    borderRadius: 10,
    fontFamily: "InterExtraLight",
    width: 300,
    alignSelf: "center",
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
