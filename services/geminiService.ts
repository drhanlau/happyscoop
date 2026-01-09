
import { GoogleGenAI, Type } from "@google/genai";
import { Recommendation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getFlavorRecommendation(mood: string, preferences: string): Promise<Recommendation> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Recommend a unique, artisanal ice cream flavor for someone feeling "${mood}" and who likes "${preferences}". Be creative and gourmet.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          flavorName: { type: Type.STRING },
          reasoning: { type: Type.STRING },
          ingredients: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          visualDescription: { type: Type.STRING }
        },
        required: ["flavorName", "reasoning", "ingredients", "visualDescription"]
      }
    }
  });

  return JSON.parse(response.text.trim());
}
