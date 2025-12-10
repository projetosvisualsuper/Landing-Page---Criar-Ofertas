import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateOfferCopy = async (productName: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key not found. Returning mock data.");
    return "🔥 OFERTA IMPERDÍVEL! O melhor preço da região você só encontra aqui. Corra antes que acabe!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, punchy, high-conversion marketing headline (in Portuguese/Brazil) for a supermarket offer for the product: "${productName}". Use emojis. Keep it under 150 characters.`,
      config: {
        systemInstruction: "You are a specialized retail copywriter for Brazilian supermarkets and pharmacies. You write aggressive, exciting sales copy.",
        temperature: 0.8,
      }
    });

    return response.text || "Oferta especial para você!";
  } catch (error) {
    console.error("Error generating copy:", error);
    return "Não foi possível gerar o texto agora. Tente novamente!";
  }
};