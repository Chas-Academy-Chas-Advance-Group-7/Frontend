import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import MapContainer from "../components/MapContainer";
import * as Location from "expo-location";
import TextButton from "../components/TextButton";
import { colors } from "../styles/colors";

const UserScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [sendingView, setSendingView] = useState<boolean | undefined>(true);

  const handleViewChange = () => {
    setSendingView((prev) => !prev);
  };

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
      <View style={styles.buttonContainer}>
        <TextButton
          title="Utgående"
          onPress={sendingView ? undefined : handleViewChange}
          color={sendingView ? colors.textPrimary : colors.buttonColorGrey}
          underline={sendingView}
        />
        <TextButton
          title="Inkommande"
          onPress={!sendingView ? undefined : handleViewChange}
          color={!sendingView ? colors.textPrimary : colors.buttonColorGrey}
          underline={!sendingView}
        />
      </View>
      {sendingView ? (
        <View>
          {/* <Text>Utgående</Text> */}
          <MapContainer
            latitude={location?.coords.latitude}
            longitude={location?.coords.longitude}
          />
        </View>
      ) : (
        <View>
          {/* <Text>Inkommande</Text> */}
          <MapContainer
            latitude={location?.coords.latitude}
            longitude={location?.coords.longitude}
          />
        </View>
      )}
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    width: 300,
  },
});
