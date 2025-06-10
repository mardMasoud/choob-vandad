// src/components/Chatbot.tsx
'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { getGeminiResponseAction } from '@/lib/actions';

// تعریف نوع برای هر پیام در چت
interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: 'سلام! من دستیار فروش چوب ونداد هستم. چطور می‌توانم کمکتان کنم؟'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // هوک برای اسکرول خودکار به پایین با اضافه شدن پیام جدید
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // ساخت تاریخچه چت برای ارسال به API
    // ما فقط متن را می‌فرستیم، نقش‌ها در Server Action مدیریت می‌شوند
    const chatHistoryForApi = newMessages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
    }));

    // فراخوانی Server Action
    const result = await getGeminiResponseAction(chatHistoryForApi);

    if (result.response) {
      const botMessage: Message = { role: 'model', text: result.response };
      setMessages(prev => [...prev, botMessage]);
    } else if (result.error) {
      const errorMessage: Message = { role: 'model', text: `متاسفانه خطایی رخ داد: ${result.error}` };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* پنجره چت */}
      <div
        className={`w-80 h-[28rem] bg-white rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out origin-bottom-right
                    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        {/* هدر پنجره چت */}
        <div className="bg-teal-600 text-white p-4 rounded-t-xl flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-2">
            <Bot size={22} />
            <h3 className="font-bold">پشتیبانی آنلاین ونداد</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:opacity-75">
            <X size={20} />
          </button>
        </div>

        {/* بدنه چت (محل نمایش پیام‌ها) */}
        <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-lg inline-block max-w-xs text-sm ${
                msg.role === 'user' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {/* نمایش انیمیشن "در حال تایپ" */}
          {isLoading && (
            <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-500 p-3 rounded-lg inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-0"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                </div>
            </div>
          )}
        </div>

        {/* ورودی متن و دکمه ارسال */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex-shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              disabled={isLoading}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition-colors flex-shrink-0 disabled:bg-teal-400 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>

      {/* دکمه شناور برای باز کردن چت */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-4 bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg
                    hover:bg-teal-700 transition-all duration-300 ease-in-out transform hover:scale-110
                    ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
                    animate-pulse`}
        aria-label="باز کردن چت پشتیبانی"
      >
        <MessageCircle size={30} />
      </button>
    </div>
  );
};

export default Chatbot;