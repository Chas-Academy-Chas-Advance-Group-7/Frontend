import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import React from "react";
import { colors } from "../styles/colors";
import { useUser } from "../../context/UserContext";

const Header = () => {
  const { username } = useUser();
  const { logout } = useUser();

  return (
    <View>
      {!username ? (
        <View style={styles.container}>
          <Image
            source={require("../assets/truck_logo.png")}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.text}>BlueRoute</Text>
        </View>
      ) : (
        <View style={styles.smallContainer}>
          <Text style={styles.smallText}>BlueRoute</Text>
          <Pressable onPress={() => logout()}>
            <Image
              source={require("../assets/sign_out_icon.png")}
              style={styles.signoutIcon}
            />
          </Pressable>
        </View>
      )}
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
  smallContainer: {
    flexDirection: "row",
    padding: 15,
    marginTop: 30,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  signoutIcon: { width: 25, height: 25 },
  text: {
    color: colors.textPrimary,
    fontFamily: "InterBold",
    fontSize: 20,
  },
  smallText: {
    color: colors.textPrimary,
    fontFamily: "InterBold",
    fontSize: 18,
  },
});
