
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Language } from '../types';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose, lang }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: lang === 'zh' 
        ? '你好！我是IvyShuttle AI助手，很高兴为你提供留学咨询。请问你想了解哪方面的资讯？' 
        : 'Hello! I am IvyShuttle AI Assistant. How can I help you with your study abroad plans today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '' });
  const [showLeadForm, setShowLeadForm] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are an expert education consultant for IvyShuttle (Harvard Express). 
          Your goal is to help parents and students with K12/High school and US college admissions. 
          Be professional, encouraging, and informative. 
          Refer to IvyShuttle's elite programs like ECAT. 
          Respond in the language the user is using (primary: ${lang === 'zh' ? 'Chinese' : 'English'}).`,
        }
      });

      const aiText = response.text || 'Sorry, I encountered an issue.';
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
      
      if (messages.length >= 4 && !showLeadForm) {
        setShowLeadForm(true);
      }
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Something went wrong. Please try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  const submitLead = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead Captured:', leadForm);
    alert(lang === 'zh' ? '提交成功！专业顾问将尽快联系您。' : 'Submitted! A consultant will contact you shortly.');
    setShowLeadForm(false);
  };

  if (!isOpen) return (
    <button
      onClick={onClose}
      className="fixed bottom-6 right-6 w-16 h-16 bg-brand-red text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-black transition-all z-[60] group scale-100 hover:scale-110 active:scale-95"
    >
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </button>
  );

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full sm:w-[400px] sm:h-[650px] bg-white sm:rounded-2xl shadow-2xl flex flex-col z-[70] overflow-hidden border border-slate-200 animate-in slide-in-from-bottom duration-300">
      {/* Header */}
      <div className="bg-brand-red text-white px-8 py-6 flex justify-between items-center shrink-0">
        <div>
          <h3 className="font-bold font-heading text-xl">{lang === 'zh' ? 'AI 留学助手' : 'AI Consultant'}</h3>
          <p className="text-[10px] text-red-200 uppercase tracking-widest mt-1 opacity-80">IvyShuttle Professional AI Service</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-brand-black/20 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded px-5 py-3 text-sm shadow-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-brand-black text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 rounded px-5 py-3 text-sm shadow-sm text-slate-400">
              <span className="animate-pulse">Analyzing...</span>
            </div>
          </div>
        )}

        {showLeadForm && (
          <div className="bg-brand-red/5 border border-brand-red/10 rounded p-6 mt-4">
            <p className="text-xs font-bold text-brand-red uppercase tracking-wider mb-4">
              {lang === 'zh' ? '预约资深顾问' : 'Speak with a Consultant'}
            </p>
            <form onSubmit={submitLead} className="space-y-3">
              <input 
                required
                type="text" 
                placeholder={lang === 'zh' ? '您的姓名' : 'Full Name'}
                className="w-full text-xs px-4 py-2 border border-slate-200 rounded outline-none focus:ring-1 focus:ring-brand-red"
                value={leadForm.name}
                onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
              />
              <input 
                required
                type="email" 
                placeholder={lang === 'zh' ? '您的邮箱' : 'Email Address'}
                className="w-full text-xs px-4 py-2 border border-slate-200 rounded outline-none focus:ring-1 focus:ring-brand-red"
                value={leadForm.email}
                onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
              />
              <button type="submit" className="w-full bg-brand-red text-white text-xs py-3 rounded font-black uppercase tracking-widest hover:bg-brand-black transition-all">
                {lang === 'zh' ? '立即提交' : 'Submit Request'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-slate-100 bg-white shrink-0">
        <div className="flex space-x-3">
          <input
            type="text"
            className="flex-1 bg-slate-100 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all"
            placeholder={lang === 'zh' ? '输入您的问题...' : 'How can we help?'}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            disabled={loading}
            className="bg-brand-black text-white p-3 rounded hover:bg-brand-red disabled:opacity-50 transition-all shadow-lg active:scale-90"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
