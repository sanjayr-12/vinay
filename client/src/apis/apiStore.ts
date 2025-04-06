import axios from "axios";

export const loginAPI = async (token: string) => {
  const response = await axios.post("/api/auth/", {
    token,
    roles: ["USER"],
  });
  return response?.data;
};

export const verifyAPI = async () => {
  const response = await axios.get("/api/auth/verify/", {
    withCredentials: true,
  });
  return response?.data;
};

export const logoutAPI = async () => {
  const response = await axios.get("/api/auth/logout", {
    withCredentials: true,
  });
  return response.data;
};
