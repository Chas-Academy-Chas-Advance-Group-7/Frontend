import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import MapContainer from "../components/MapContainer";

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MapContainer />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 40 },
});
