import { GoogleGenAI } from "@google/genai";
import type { OrderDetails } from '../types';
import { saveOrder } from './supabase';

// TEMPORARY TEST - HARDCODED KEY
const genAI = new GoogleGenAI({ 
  apiKey: "AIzaSyA6c_jjQHWH9gEwR8NHJ0AtcZgQODcKLYE" 
});

export const generateMeditationScript = async (details: OrderDetails): Promise<string> => {
  try {
    const fallback = `Custom meditation for ${details.name}`;
    await saveOrder(details, fallback);
    return fallback;
  } catch (error) {
    console.error("Generation failed:", error);
    return `Manual engineering required for ${details.name}`;
  }
};

export const chatWithSupport = async (message: string, history: any[]): Promise<string> => {
  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    
    return response.text || "Connecting...";
  } catch (error: any) {
    console.error("Chat Error:", error);
    return "Neural link interference. Please select your plan below.";
  }
}
