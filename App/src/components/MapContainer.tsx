import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { colors } from "../styles/colors";

const MapContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Följ leveransen</Text>
      <MapView
        style={styles.map}
        // initialRegion={{
        //   latitude: 5,
        //   longitude: 5,
        //   latitudeDelta: 0.05,
        //   longitudeDelta: 0.05,
        // }}
      />
    </View>
  );
};

export default MapContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "InterSemiBold",
    fontSize: 18,
    marginBottom: 15,
    color: colors.textPrimary,
  },
  map: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
});
