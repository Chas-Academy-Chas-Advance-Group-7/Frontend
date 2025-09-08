<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/components/Header';
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GradientButton from "./src/components/GradientButton";
>>>>>>> 38dee3f4b0c3c34faf8bc3994fbf0d624d095424

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Header />
      <StatusBar style="auto" />
=======
      <GradientButton />
>>>>>>> 38dee3f4b0c3c34faf8bc3994fbf0d624d095424
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
