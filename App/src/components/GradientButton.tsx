import {
  StyleSheet,
  Text,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type GradientButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const GradientButton: React.FC<GradientButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
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
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: 500,
  },
});
