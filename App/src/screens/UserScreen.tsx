import { StyleSheet, Image, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import MapContainer from "../components/MapContainer";
import * as Location from "expo-location";
import TextButton from "../components/TextButton";
import { colors } from "../styles/colors";
import PackageList from "../components/PackageList";
import WarningCard from "../components/WarningCard";
import { getSenderPackages, getReceiverPackages } from "../api/api";
import { useUser } from "../../context/UserContext";

const UserScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [sendingView, setSendingView] = useState<boolean | undefined>(true);
  const { userId } = useUser();

  const handleViewChange = () => {
    setSendingView((prev) => !prev);
  };

  //Test för att hämta alla avsända paket
  // useEffect(() => {
  //   const fetchSenderPackages = async () => {
  //     if (!userId) return;
  //     const data = await getSenderPackages(userId);
  //     if (data) console.log(data);
  //   };
  //   fetchSenderPackages();
  // }, []);

  //Test för att hämta alla inkommande paket
  useEffect(() => {
    const fetchReceiverPackages = async () => {
      if (!userId) return;
      const data = await getReceiverPackages(userId);
      if (data) console.log(data);
    };
    fetchReceiverPackages();
  }, []);

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
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <TextButton
          title="Utgående"
          onPress={sendingView ? undefined : handleViewChange}
          color={sendingView ? colors.textPrimary : colors.buttonColorGrey}
          underline={sendingView}
          active={sendingView}
        />
        <TextButton
          title="Inkommande"
          onPress={!sendingView ? undefined : handleViewChange}
          color={!sendingView ? colors.textPrimary : colors.buttonColorGrey}
          underline={!sendingView}
          active={!sendingView}
        />
      </View>
      {sendingView ? (
        <View>
          <Image
            source={require("../assets/sending_icon.png")}
            style={styles.icon}
          />
          <MapContainer
            latitude={location?.coords.latitude}
            longitude={location?.coords.longitude}
            truckLatitude={62.382}
            truckLongitude={17.294}
          />
          <WarningCard
            key={1}
            warningLevel="none"
            message="Du har ingar varningar."
          />
          <PackageList route="sending" role="user" />
        </View>
      ) : (
        <View>
          <Image
            source={require("../assets/receiving_icon.png")}
            style={styles.icon}
          />
          <MapContainer
            latitude={location?.coords.latitude}
            longitude={location?.coords.longitude}
            truckLatitude={62.398}
            truckLongitude={17.324}
          />
          <WarningCard
            key={1}
            warningLevel="caution"
            message="Temperaturen är aningen förhöjd, men fortfarande inom gränsvärdet."
          />
          <PackageList route="receiving" role="user" />
        </View>
      )}
    </ScrollView>
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
  icon: {
    alignSelf: "center",
    height: 30,
    width: 30,
    marginVertical: 15,
  },
});
