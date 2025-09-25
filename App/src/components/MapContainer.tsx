import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { colors } from "../styles/colors";

type MapContainerProps = {
  latitude?: number;
  longitude?: number;
};

const MapContainer: React.FC<MapContainerProps> = ({ latitude, longitude }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Följ leveransen</Text>
      {latitude && longitude && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 2,
            longitudeDelta: 2,
          }}
        />
      )}
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
