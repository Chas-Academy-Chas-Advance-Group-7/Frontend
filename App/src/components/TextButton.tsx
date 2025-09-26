import {
  StyleSheet,
  Text,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import React from "react";

type TextButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  color: string;
  underline?: boolean;
};

const TextButton: React.FC<TextButtonProps> = ({
  onPress,
  title,
  color,
  underline,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text
        style={[
          styles.buttonText,
          { color },
          underline && { textDecorationLine: "underline" },
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
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "InterSemiBold",
    fontSize: 16,
  },
});
