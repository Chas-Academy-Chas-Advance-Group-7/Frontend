import { Button, StyleSheet, View, Text } from "react-native";
import HeyDriver from "../components/HeyDriver";
import Header from "../components/Header";
import WarningCard from "../components/WarningCard";
import Warningheadline from "../components/Warningheadline";
import { useCameraPermissions } from "expo-camera";
import QRCodeScanner from "../components/QRCodeScanner";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import GradientButton from "../components/GradientButton";
import { colors } from "../styles/colors";

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
    warningLevel: 'none',
    message: 'Du har ingar varningar.',
  },
];

const DriverScreen = () => {
  const [hasPermission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(hasPermission?.granted);
  const [showScanner, setShowScanner] = useState(false);

  const handleScanPress = async () => {
  if (!isPermissionGranted) {
    const permission = await requestPermission();
    if (!permission.granted) return;
  }
    setShowScanner(true);
  };

  if (showScanner) {
    return (
      <View style={styles.container}>
        <QRCodeScanner />
        <GradientButton  colors={[colors.buttonGradientLeft, colors.buttonGradientRight]}
        title="Stäng kamera" 
        onPress={() => setShowScanner(false)} />
      </View>
    );
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Header />
      <HeyDriver username="Anna" truck="XYZ123" />
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
      title="Skanna QR-kod" 
      onPress={handleScanPress} 
      />
    </View>
    </ScrollView>
  );
};

export default DriverScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 40 
  },
  permission: {
    fontFamily: "InterRegular",
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  }
});
                                           