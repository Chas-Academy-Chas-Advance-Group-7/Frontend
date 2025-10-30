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

export const login = async (
  type: "user" | "driver",
  email: string,
  password: string
) => {
  const endpoint = type === "user" ? "user_login" : "driver_login";
  const response = await fetch(`${baseUrl}/login_portal/${endpoint}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok && data?.token) {
    await SecureStore.setItemAsync("token", data.token);
    return data.token;
  }
  throw new Error("Login failed");
};

export const userRegister = async () => {
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
    if (!response.ok) throw new Error("Could not add user");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const driverRegister = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/login_portal/driver_login/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "driver@chas.se", //dessa tre måste tas in som props senare
          password: "123456",
          name: "test",
        }),
      }
    );
    if (!response.ok) throw new Error("Could not add user");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getSenderPackages = async (userId: number) => {
  try {
    const token = await SecureStore.getItemAsync("token");
    const response = await fetch(
      `${baseUrl}/user_portal/sender_route/all_packages/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) throw new Error("Could not fetch sender route packages");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getReceiverPackages = async (userId: number) => {
  try {
    const token = await SecureStore.getItemAsync("token");
    const response = await fetch(
      `${baseUrl}/user_portal/reciever_route/all_packages/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) throw new Error("Could not fetch sender route packages");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSingleReceiverPackage = async (
  userId: number | null,
  packageId?: number
) => {
  try {
    const token = await SecureStore.getItemAsync("token");
    const response = await fetch(
      `${baseUrl}/user_portal/reciever_route/single_package/${userId}/${packageId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) throw new Error("Could not fetch sender route packages");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const truckRegister = async (driverId: number, truckId: number) => {
  try {
    const token = await SecureStore.getItemAsync("token");
    const response = await fetch(
      `${baseUrl}/employee_portal/driver_routes/register_to_truck/${driverId}/${truckId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) throw new Error("Could not register driver to truck");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
