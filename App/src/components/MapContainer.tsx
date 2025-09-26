import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
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
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker coordinate={{ latitude, longitude }} />
          <Marker coordinate={{ latitude: 62.382, longitude: 17.294 }}>
            <Image
              source={require("../assets/truck_logo.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </Marker>
        </MapView>
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
