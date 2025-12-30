import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AssistantChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Jai Hind! Welcome to Air Force School Hindan. I am your virtual assistant. How can I help you with admissions, fees, or facilities today?', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: "I'm having trouble connecting to the school server. Please try again later.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-af-blue hover:bg-blue-700 hover:scale-110'
        }`}
      >
        {isOpen ? <X className="text-white" size={24} /> : <MessageCircle className="text-white" size={28} />}
        {!isOpen && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
            1
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 dark:border-gray-700 animate-fade-in-up overflow-hidden">
          {/* Header */}
          <div className="bg-af-blue p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Bot className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">School Assistant</h3>
              <p className="text-blue-100 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span> Online
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-af-blue text-white rounded-br-none'
                      : 'bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                  <p className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-blue-200' : 'text-gray-400 dark:text-gray-500'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-700">
                  <Loader2 className="w-5 h-5 animate-spin text-af-blue dark:text-af-light" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about admission, fees..."
                className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-af-blue/50 dark:focus:ring-af-light/50 text-gray-700 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-af-blue text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 dark:text-gray-500 mt-2">
              Powered by AI. Verify info with school office.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AssistantChat;