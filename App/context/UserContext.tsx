import React, { createContext, useContext, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { login } from "../src/api/api";

type UserContextType = {
  username: string | null;
  userId: string | null;
  role: string | null;
  userLogin: (username: string, password: string) => Promise<boolean>;
  driverLogin: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<UserContextType>({
  username: null,
  userId: null,
  role: null,
  userLogin: async () => false,
  driverLogin: async () => false,
  logout: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const userLogin = async (email: string, password: string) => {
    try {
      const success = await login("user", email, password);
      if (success) {
        setUsername(email);
        // setUsername(user.username ?? null);
        // setUserId(user.user_id?.toString() ?? null);
        // setRole(user.role ?? null);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const driverLogin = async (email: string, password: string) => {
    try {
      const success = await login("driver", email, password);
      if (success) {
        setUsername(email);
        // setUsername(user.username ?? null);
        // setUserId(user.user_id?.toString() ?? null);
        // setRole(user.role ?? null);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const logout = async () => {
    setUsername(null);
    await SecureStore.deleteItemAsync("token");
    // setUserId(null);
    // setRole(null);
  };

  return (
    <UserContext.Provider
      value={{ username, userId, role, userLogin, driverLogin, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserContext;
