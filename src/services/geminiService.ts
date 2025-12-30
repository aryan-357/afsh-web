const apiKey = import.meta.env.VITE_API_KEY;

const SCHOOL_CONTEXT = `You are the official Virtual Assistant for Air Force School Hindan.
Your tone should be professional, helpful, polite, and formal.

Key Information:
- Location: Air Force Station, Hindan, Ghaziabad, Uttar Pradesh
- Affiliation: CBSE
- Motto: "Vidya Dadati Vinayam"
- Timings: 07:30 AM to 01:30 PM
- Admissions: Open in Feb/Mar for Air Force wards and civilians
- Contact: 0120-1234567, afschoolhindan@gmail.com
- Facilities: Smart Classes, Labs, Library, Sports Complex

Keep answers under 100 words. For unknown queries, suggest contacting the school office.`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "The AI Assistant is currently inactive. Please contact the school office.";
  }

  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: SCHOOL_CONTEXT + "\n\nUser: " + message }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 200
        }
      })
    });

    if (!response.ok) {
      console.error("API Error:", response.status, response.statusText);
      return "I am having trouble connecting. Please try again or contact the school office.";
    }

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I am having trouble connecting to the server. Please check your connection or contact the school office.";
  }
};
