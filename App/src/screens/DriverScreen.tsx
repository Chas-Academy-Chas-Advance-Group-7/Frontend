import { Button, StyleSheet, View, Text, Alert } from "react-native";
import HeyDriver from "../components/HeyDriver";
import Header from "../components/Header";
import WarningCard from "../components/WarningCard";
import Warningheadline from "../components/Warningheadline";
import { useCameraPermissions } from "expo-camera";
import QRCodeScanner, { QRData } from "../components/QRCodeScanner";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import GradientButton from "../components/GradientButton";
import { colors } from "../styles/colors";
import * as Location from "expo-location";
import DriverMapContainer from "../components/DriverMapContainer";
import users from "../assets/users.json";
import PackageList from "../components/PackageList";
import AlertModal from "../components/AlertModal";
import { NativeSyntheticEvent } from "react-native";



type WarningLevel = "caution" | "danger" | "none";

interface WarningData {
  warningLevel: WarningLevel;
  icon?: any;
  message: string;
}

const fakeData: WarningData[] = [
  // {
  //   warningLevel: "caution",
  //   message:
  //     "Temperaturen är aningen förhöjd men är fortfarande inom gränsvärdet, håll koll!",
  // },
  // {
  //   warningLevel: 'danger',
  //   message: 'Temperaturen är förhävd, sänk farten och stanna om möjligt!',
  // },
  {
    warningLevel: "none",
    message: "Du har ingar varningar.",
  },
];

const DriverScreen: React.FC = () => {
  const [scannedData, setScannedData] = useState<QRData| null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

   const handleScan = ( data: QRData) => {
    setScannedData(data);  
    setModalVisible(true);

  };

  const [hasPermission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(hasPermission?.granted);


  const handleScanPress = async () => {
    if (!isPermissionGranted) {
      const permission = await requestPermission();
      if (!permission.granted) return;
    }
    setShowScanner(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setShowScanner(false);
    setScannedData(null);
  }

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

  const user = users.find((user) => user.role === "driver");
  let packages = user?.packages;

  
  if (showScanner) {
    return (
      <View style={styles.container}>
        <QRCodeScanner onScan={handleScan}/>
        <AlertModal
          visible={modalVisible}
          data={scannedData}
          onClose={handleCloseModal}
        />
        {/* <GradientButton
          colors={[colors.buttonGradientLeft, colors.buttonGradientRight]}
          title="Stäng kamera"
          onPress={() => setShowScanner(false)}
        /> */}
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <HeyDriver username="Anna" truck="XYZ123" />
        <DriverMapContainer
          latitude={location?.coords.latitude}
          longitude={location?.coords.longitude}
          deliveryPoints={packages?.map((pkg) => ({
            id: String(pkg.package_id),
            latitude: pkg.package_latitude,
            longitude: pkg.package_longitude,
          }))}
        />
        <Warningheadline />
        {fakeData.map((item, index) => (
          <WarningCard
            key={index}
            warningLevel={item.warningLevel}
            message={item.message}
          />
        ))}
        <GradientButton
          colors={[colors.buttonGradientLeft, colors.buttonGradientRight]}
          title="Skanna paket"
          onPress={handleScanPress}
        />
        <PackageList route="all" role="driver" />
      </View>
    </ScrollView>
  );
};

export default DriverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  permission: {
    fontFamily: "InterRegular",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
});
