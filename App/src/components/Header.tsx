import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { colors } from "../styles/colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/truck_logo.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>BlueRoute</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginTop: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  text: {
    color: colors.textPrimary,
    fontFamily: "InterBold",
    fontSize: 20,
    fontWeight: "bold",
  },
});
