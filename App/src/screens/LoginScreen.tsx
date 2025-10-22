import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import GradientButton from "../components/GradientButton";
import { colors } from "../styles/colors";
import Header from "../components/Header";
import TextButton from "../components/TextButton";

const LoginScreen = () => {
  const { userLogin, driverLogin } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [driverView, setDriverView] = useState<boolean | undefined>(false);

  const handleLogin = async () => {
    if (driverView) {
      const success = await driverLogin(email, password);
      if (!success) Alert.alert("Login failed", "Invalid username or password");
    } else {
      const success = await userLogin(email, password);
      if (!success) Alert.alert("Login failed", "Invalid username or password");
    }
  };

  const handleViewChange = () => {
    setDriverView((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <TextButton
          title="Kund"
          onPress={!driverView ? undefined : handleViewChange}
          color={!driverView ? colors.textPrimary : colors.buttonColorGrey}
          underline={!driverView}
          active={!driverView}
        />
        <TextButton
          title="Chaufför"
          onPress={driverView ? undefined : handleViewChange}
          color={driverView ? colors.textPrimary : colors.buttonColorGrey}
          underline={driverView}
          active={driverView}
        />
      </View>
      {!driverView ? (
        <View style={styles.loginForm}>
          <TextInput
            placeholder="E-postadress"
            value={email}
            onChangeText={setEmail}
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
      ) : (
        <View style={styles.loginForm}>
          <TextInput
            placeholder="E-postadress"
            value={email}
            onChangeText={setEmail}
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
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: 300,
  },
  loginForm: {
    marginTop: 40,
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
