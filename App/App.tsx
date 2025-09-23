import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GradientButton from "./src/components/GradientButton";
import Header from "./src/components/Header";
import HeyDriver from "./src/components/HeyDriver";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
        {/* <HeyDriver username="Anna" truck="1" /> */}
      <GradientButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
