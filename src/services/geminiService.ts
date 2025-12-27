import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize Gemini AI
// The API key must be obtained using import.meta.env for Vite
const apiKey = import.meta.env.VITE_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const SCHOOL_CONTEXT = `
You are the official Virtual Assistant for Air Force School Hindan.
Your tone should be professional, helpful, polite, and formal, suitable for an educational institution.

Key Information about Air Force School Hindan:
- **Location**: Air Force Station, Hindan, Ghaziabad, Uttar Pradesh.
- **Affiliation**: CBSE (Central Board of Secondary Education).
- **Motto**: "Vidya Dadati Vinayam" (Knowledge gives humility).
- **Mission**: To provide quality education to the children of Air Force personnel and civilians, fostering all-round development.
- **Principal**: Mrs. [Name Placeholder].
- **Facilities**: Smart Classes, Science Labs, Computer Labs, Library, Sports Complex, Playground.
- **Admissions**: Usually open in February/March for the new academic session. Admission is primarily for Air Force wards but civilian seats are available subject to vacancy.
- **Contact**: Phone: 0120-1234567, Email: afschoolhindan@gmail.com (placeholder).

Instructions:
- Answer queries related to admissions, syllabus, timings (07:30 AM to 01:30 PM), and facilities.
- If asked about fees, provide a general range but advise checking the official "Fee Structure" section or contacting the office.
- If you don't know an answer, politely ask them to contact the school administration office directly.
- Keep answers concise (under 100 words) unless detailed explanation is requested.
`;

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<void> => {
  if (!ai) return;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SCHOOL_CONTEXT,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat session", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "The AI Assistant is currently inactive (API Key missing). Please contact the school office.";
  }

  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Service temporarily unavailable. Please try again later.";
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({
      message: message,
    });
    return result.text || "I apologize, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the server. Please check your connection or contact the school office.";
  }
};