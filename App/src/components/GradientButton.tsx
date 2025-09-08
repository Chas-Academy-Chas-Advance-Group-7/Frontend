import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../styles/colors";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = () => {
  return (
    <Pressable>
      <LinearGradient
        colors={["#6BAED6", "#08519C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Lägg till paket</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
