import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { colors } from "../styles/colors";

type MapContainerProps = {
  latitude?: number;
  longitude?: number;
  deliveryPoints?: { id: string; latitude: number; longitude: number }[];
};

const MapContainer: React.FC<MapContainerProps> = ({
  latitude,
  longitude,
  deliveryPoints,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leveransplatser</Text>
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
          {deliveryPoints?.map((point) => (
            <Marker
              key={point.id}
              coordinate={{
                latitude: point.latitude,
                longitude: point.longitude,
              }}
            >
              <Image
                source={require("../assets/package_icon.png")}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "white",
                  borderRadius: 100,
                  borderWidth: 2,
                  padding: 5,
                  borderColor: colors.textPrimary,
                }}
                resizeMode="contain"
              />
            </Marker>
          ))}
        </MapView>
      )}
    </View>
  );
};

export default MapContainer;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
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
