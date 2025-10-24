import React, { createContext, useContext, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { login } from "../src/api/api";
import { jwtDecode } from "jwt-decode";

type UserContextType = {
  username: string | null;
  userId: number | null;
  role: string | null;
  userLogin: (username: string, password: string) => Promise<boolean>;
  driverLogin: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

type UserProviderProps = {
  children: React.ReactNode;
};

type DecodedToken = {
  id: number;
  email: string;
  user_name: string;
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
  const [userId, setUserId] = useState<number | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const userLogin = async (email: string, password: string) => {
    try {
      const token = await login("user", email, password);
      if (token) {
        const decoded = jwtDecode<DecodedToken>(token);
        // setUsername(decoded.user_name);
        setUsername(email);
        setUserId(decoded.id);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const driverLogin = async (email: string, password: string) => {
    try {
      const token = await login("driver", email, password);
      if (token) {
        const decoded = jwtDecode<DecodedToken>(token);
        // setUsername(decoded.user_name);
        setUsername(email);
        setUserId(decoded.id);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
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
