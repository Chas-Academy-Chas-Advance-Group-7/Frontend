// import users from "../assets/users.json";

// export type User = {
//   username: string;
//   password: string;
//   role: string;
//   user_id?: string | number;
// };

// export const apiLogin = async (
//   username: string,
//   password: string
// ): Promise<User | undefined> => {
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   return user;
// };

import { jwtDecode } from "jwt-decode";
import * as SecureStore from "expo-secure-store";

const baseUrl =
  "https://express-api7-f6auegdrc4b0fheg.swedencentral-01.azurewebsites.net";

export const testUserLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(`${baseUrl}/login_portal/user_login/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok && data?.token) {
      console.log("Received token: ", data.token);
      await SecureStore.setItemAsync("token", data.token);
      // const decoded = jwtDecode(data.token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const testDriverLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(`${baseUrl}/login_portal/driver_login/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok && data?.token) {
      console.log("Received token: ", data.token);
      await SecureStore.setItemAsync("token", data.token);
      // const decoded = jwtDecode(data.token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const testUserRegister = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/login_portal/user_login/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "test@hej.se", //dessa tre måste tas in som props senare
          password: "123456",
          user_name: "test",
        }),
      }
    );
    if (!response.ok) throw new Error("Error: Could not add user");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
