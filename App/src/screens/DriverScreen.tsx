import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import HeyDriver from "../components/HeyDriver";
import Header from "../components/Header";
import WarningCard from "../components/WarningCard";
import Warningheadline from "../components/Warningheadline";


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
    message: 'Du har ingar varningar.     ',
  },
];

const DriverScreen = () => {
  return (
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
    </View>
  );
};

export default DriverScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40 },
});
