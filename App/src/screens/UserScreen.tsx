import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import MapContainer from "../components/MapContainer";
import * as Location from "expo-location";

const UserScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const getCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };

    getCurrentLocation();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Header />
      <MapContainer
        latitude={location?.coords.latitude}
        longitude={location?.coords.longitude}
      />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 40 },
});
