import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeyDriver from "../components/HeyDriver";
import Header from "../components/Header";

const DriverScreen = () => {
  return (
    <View>
      <Header />
      <HeyDriver username="driver" truck="XYZ123" />
    </View>
  );
};

export default DriverScreen;

const styles = StyleSheet.create({});
