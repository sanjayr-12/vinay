import axios from "axios";
import { configGemini } from "../config/gemini";

export const textToImage = async (prompt: string) => {
    const ai = await configGemini()
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-exp-image-generation",
            contents: prompt,
            config: {
                responseModalities: ["Text","Image"]
            }
        });
        if (response?.candidates) {
            console.log(response.candidates[0]?.content?.parts);
        } else {
            console.error("Error: response.candidates is undefined");
        }
    } catch (error) {
        throw error
    }
};
