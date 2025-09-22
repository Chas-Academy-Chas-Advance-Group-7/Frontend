import AppNavigator from "./src/navigation/AppNavigator";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
