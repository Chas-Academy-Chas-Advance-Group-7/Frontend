import React, { createContext, useContext, useState } from "react";
import { apiLogin } from "../src/api/api";

type UserContextType = {
  username: string | null;
  userId: string | null;
  role: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<UserContextType>({
  username: null,
  userId: null,
  role: null,
  login: async () => false,
  logout: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const user = await apiLogin(username, password);
      if (user) {
        setUsername(user.username ?? null);
        setUserId(user.user_id?.toString() ?? null);
        setRole(user.role ?? null);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const logout = async () => {
    setUsername(null);
    setUserId(null);
    setRole(null);
  };

  return (
    <UserContext.Provider value={{ username, userId, role, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserContext;
