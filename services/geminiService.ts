import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLovePoem = async (): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Roses are red, violets are blue, I'm just a robot, but I love you! 🤖❤️";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Write a short, very cute, whimsical, and rhyming 4-line poem celebrating that someone just said 'Yes' to being my Valentine. Use emojis. Keep it under 40 words.",
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Simple creative task, no thinking needed
      }
    });
    
    return response.text || "Yay! You're my Valentine! ❤️";
  } catch (error) {
    console.error("Error generating poem:", error);
    return "Roses are red, violets are blue, the AI is tired, but I still choose you! ❤️";
  }
};