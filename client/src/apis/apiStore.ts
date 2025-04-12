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

export const imageUpload = async (imageBase64: string, name: string) => {
  const response = await axios.post(
    "/api/user/upload-img",
    { imageBase64, imageName: name },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const getImages = async () => {
  const response = await axios.get("/api/user/get-imgs", {
    withCredentials: true,
  });
  return response.data;
};

export const deleteImage = async (docId: string, public_id: string) => {
  const response = await axios.post(
    "/api/user/delete-img",
    { docId, public_id },
    { withCredentials: true }
  );
  return response.data;
};

export const generateAIImage = async (prompt: string) => {
  const response = await axios.post(
    "/api/user/gen-img",
    { prompt },
    { withCredentials: true }
  );
  return response.data;
};
