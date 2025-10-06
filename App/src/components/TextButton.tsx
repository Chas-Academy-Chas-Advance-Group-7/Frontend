import {
  StyleSheet,
  Text,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { colors } from "../styles/colors";

type TextButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  color: string;
  underline?: boolean;
  active?: boolean;
};

const TextButton: React.FC<TextButtonProps> = ({
  onPress,
  title,
  color,
  underline,
  active,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, active && styles.activeButton]}
    >
      <Text
        style={[
          styles.buttonText,
          { color },
          underline && { textDecorationLine: "underline" },
          active && styles.activeButtonText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  activeButton: {
    borderBottomColor: colors.textPrimary,
    backgroundColor: colors.background,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "InterRegular",
    fontSize: 16,
  },
  activeButtonText: {
    fontSize: 18,
    fontFamily: "InterSemiBold",
  },
});
