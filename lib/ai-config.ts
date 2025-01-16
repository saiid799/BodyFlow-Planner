import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);

export const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});

export const generateContent = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};
