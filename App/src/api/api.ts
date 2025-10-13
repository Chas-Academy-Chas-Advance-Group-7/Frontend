import users from "../assets/users.json";

export type User = {
  username: string;
  password: string;
  role: string;
  user_id?: string | number;
};

export const apiLogin = async (
  username: string,
  password: string
): Promise<User | undefined> => {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  return user;
};
