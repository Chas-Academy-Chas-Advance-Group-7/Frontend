import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";

const Varning = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.warning}>Varningar</Text>
    </View>
  );
};

export default Varning;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
  },
  warning: {
    fontFamily: "InterBold",
    fontSize: 18,
    color: colors.textPrimary,
  },
});
