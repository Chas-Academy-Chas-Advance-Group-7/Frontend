import {
  StyleSheet,
  Text,
  Pressable,
  GestureResponderEvent,
  Animated,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import useAnimation from "../hooks/useAnimation";

type GradientButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  colors: [string, string, ...string[]];
  style?: object;
};

const GradientButton: React.FC<GradientButtonProps> = ({
  onPress,
  title,
  colors,
  style,
}) => {
  const { opacityValue, fadeIn, fadeOut } = useAnimation();

  return (
    <Pressable onPress={onPress} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={[
          {
            opacity: opacityValue.interpolate({
              inputRange: [0, 0.7],
              outputRange: [1, 0.7],
            }),
          },
        ]}
      >
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.button, style]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </Animated.View>
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
    width: 300,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "InterSemiBold",
    fontSize: 16,
  },
});
