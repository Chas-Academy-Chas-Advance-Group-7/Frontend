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
  title: string;
  colors: [string, string, ...string[]];
};

const GradientButton: React.FC<GradientButtonProps> = ({
  onPress,
  title,
  colors,
}) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{title}</Text>
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
    alignSelf: "center",
    marginVertical: 5,
    width: 300,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "InterSemiBold",
    fontSize: 16,
  },
});
