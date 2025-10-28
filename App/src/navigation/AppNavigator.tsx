import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useUser } from "../../context/UserContext";
import LoginScreen from "../screens/LoginScreen";
import DriverScreen from "../screens/DriverScreen";
import UserScreen from "../screens/UserScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { username } = useUser();
  const { role } = useUser();

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!username ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </>
          ) : role === "driver" ? (
            <Stack.Screen name="DriverScreen" component={DriverScreen} />
          ) : (
            <Stack.Screen name="UserScreen" component={UserScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default AppNavigator;

const styles = StyleSheet.create({});
