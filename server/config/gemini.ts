import { GoogleGenAI } from "@google/genai";

export const configGemini = async () => {
  const key = process.env.GEM_API;
    if (!key) {
    throw new Error("No api key");
  }
  try {
    const result = new GoogleGenAI({ apiKey: key });
    return result;
  } catch (error) {
    throw error;
  }
};
