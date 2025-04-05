import axios from "axios";

export const loginAPI = async (token: string) => {
  const response = await axios.post("/api/auth/", { token });
  return response?.data;
};
