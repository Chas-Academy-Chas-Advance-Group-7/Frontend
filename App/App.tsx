import AppNavigator from "./src/navigation/AppNavigator";
import { UserProvider } from "./context/UserContext";
import {
  useFonts,
  Inter_200ExtraLight as InterExtraLight,
  Inter_400Regular as InterRegular,
  Inter_600SemiBold as InterSemiBold,
  Inter_700Bold as InterBold,
} from "@expo-google-fonts/inter";
import { View, ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    InterExtraLight,
    InterRegular,
    InterSemiBold,
    InterBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
