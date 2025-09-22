// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GradientButton from "./src/components/GradientButton";
import Header from "./src/components/Header";
import { colors } from "./src/styles/colors";

export default function App() {
  const handlePress = async () => {
    console.log("You pressed the button");
  };

  return (
    <View style={styles.container}>
      <Header />
      <GradientButton
        onPress={handlePress}
        title="Lägg till paket"
        colors={[colors.buttonGradientLeft, colors.buttonGradientRight]}
      />
      <GradientButton
        onPress={handlePress}
        title="Gå tillbaka"
        colors={[colors.buttonColorGrey, colors.buttonColorGrey]}
      />
      {/* <Header /> */}
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
