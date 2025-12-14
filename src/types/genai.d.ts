declare module '@google/genai' {
  export interface GenerateContentResponse {
    text: string;
    candidates?: any[];
  }

  export interface Chat {
    sendMessage(params: { message: string }): Promise<GenerateContentResponse>;
  }

  export class GoogleGenAI {
    constructor(params: { apiKey: string | undefined });
    chats: {
      create(params: { model: string; config?: any }): Chat;
    };
    models: {
        generateContent(params: { model: string; contents: any; config?: any }): Promise<GenerateContentResponse>;
    }
  }
}