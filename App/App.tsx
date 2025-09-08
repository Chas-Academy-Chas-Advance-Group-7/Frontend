import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GradientButton from "./src/components/GradientButton";

export default function App() {
  return (
    <View style={styles.container}>
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
