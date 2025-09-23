import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GradientButton from "./src/components/GradientButton";
import Header from "./src/components/Header";
import HeyDriver from "./src/components/HeyDriver";
import AppNavigator from "./src/navigation/AppNavigator";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
