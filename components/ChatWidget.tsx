
import React, { useState, useEffect, useRef } from 'react';
import { SUPPORT_PERSONAS } from '../services/botKnowledge';
import { chatWithSupport } from '../services/geminiService';
import { playSound } from '../services/audioService';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
        { role: 'model', text: "Welcome to The Frequency Code.\n\nI am here to assist with your quantum transition.\n\nHow may I serve you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [persona, setPersona] = useState(SUPPORT_PERSONAS[0]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Persist persona for the entire session
    useEffect(() => {
        try {
            const savedPersonaIndex = sessionStorage.getItem('fc_chat_persona_idx');
            if (savedPersonaIndex !== null && SUPPORT_PERSONAS[parseInt(savedPersonaIndex)]) {
                setPersona(SUPPORT_PERSONAS[parseInt(savedPersonaIndex)]);
            } else {
                const randomIndex = Math.floor(Math.random() * SUPPORT_PERSONAS.length);
                setPersona(SUPPORT_PERSONAS[randomIndex]);
                sessionStorage.setItem('fc_chat_persona_idx', randomIndex.toString());
            }
        } catch (e) {
            console.warn("Session storage unavailable", e);
        }
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading, statusMessage]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);
        setStatusMessage('Syncing neural link...');
        playSound('click');

        // Randomized human-like delay between 30 and 45 seconds
        const delay = Math.floor(Math.random() * (45000 - 30000) + 30000);
        const startTime = Date.now();

        const statusInterval = setInterval(() => {
            const statuses = [
                'Analyzing linguistic intent...',
                'Formatting quantum response...',
                `${persona.name.split(' ')[0]} is finalizing your guidance...`
            ];
            setStatusMessage(statuses[Math.floor(Math.random() * statuses.length)]);
        }, 8000);
        
        try {
            const history = messages.map(m => ({
                role: m.role === 'user' ? 'user' as const : 'model' as const,
                parts: [{ text: m.text }]
            }));

            const botResponsePromise = chatWithSupport(userMsg, history);
            const botResponse = await botResponsePromise;
            
            const elapsed = Date.now() - startTime;
            if (elapsed < delay) {
                await new Promise(resolve => setTimeout(resolve, delay - elapsed));
            }

            setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
        } catch (err) {
            setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Please proceed with your plan selection below to lock in your frequency." }]);
        } finally {
            clearInterval(statusInterval);
            setIsLoading(false);
            setStatusMessage('');
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 w-[320px] md:w-[380px] h-[500px] bg-black/95 backdrop-blur-3xl border border-amber-500/30 rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-fade-in">
                    {/* Header */}
                    <div className="p-6 border-b border-white/5 bg-gradient-to-r from-amber-500/10 to-transparent flex items-center gap-4">
                        <div className="relative">
                            <img src={persona.avatar} alt={persona.name} className="w-12 h-12 rounded-full border-2 border-amber-500/50 object-cover" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full shadow-lg"></div>
                        </div>
                        <div>
                            <h3 className="text-white font-black text-xs uppercase tracking-widest">{persona.name}</h3>
                            <p className="text-[10px] text-amber-500/60 font-bold uppercase tracking-tight">{persona.role}</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="ml-auto text-white/20 hover:text-white transition-colors p-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages with High-Contrast Yellow Scrollbar */}
                    <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-black to-neutral-900/50 chat-scroll-area">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] px-5 py-4 rounded-2xl text-[13px] leading-relaxed whitespace-pre-wrap shadow-xl ${
                                    m.role === 'user' 
                                    ? 'bg-amber-500 text-black font-black' 
                                    : 'bg-white/5 text-gray-200 border border-white/10 backdrop-blur-sm'
                                }`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex flex-col gap-3 items-start animate-pulse">
                                <div className="bg-white/5 px-5 py-4 rounded-2xl border border-white/10">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                                <span className="text-[9px] uppercase tracking-[0.3em] text-amber-500/40 font-black ml-2">
                                    {statusMessage}
                                </span>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-4 bg-black border-t border-white/5 flex gap-2">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Quantum inquiry..."
                            disabled={isLoading}
                            className="flex-grow bg-white/5 border border-white/10 rounded-full px-5 py-3 text-xs text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all disabled:opacity-50"
                        />
                        <button 
                            type="submit" 
                            disabled={isLoading || !input.trim()}
                            className="w-11 h-11 rounded-full bg-amber-500 flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}

            {/* Bubble */}
            <button 
                onClick={() => { setIsOpen(!isOpen); playSound('click'); }}
                className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-600 shadow-[0_0_30px_rgba(245,158,11,0.4)] flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90"
            >
                <div className="absolute inset-0 rounded-full animate-ping bg-amber-500/20 group-hover:bg-amber-500/40"></div>
                <svg className={`w-8 h-8 text-black transition-all duration-500 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'scale-100 opacity-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <svg className={`absolute w-8 h-8 text-black transition-all duration-500 ${!isOpen ? 'rotate-[-90deg] scale-0 opacity-0' : 'scale-100 opacity-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .chat-scroll-area::-webkit-scrollbar {
                    width: 8px;
                }
                .chat-scroll-area::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.4);
                }
                .chat-scroll-area::-webkit-scrollbar-thumb {
                    background: #fbbf24;
                    border-radius: 10px;
                    border: 2px solid rgba(0, 0, 0, 0.5);
                }
                .chat-scroll-area::-webkit-scrollbar-thumb:hover {
                    background: #f59e0b;
                }
                .chat-scroll-area {
                    scrollbar-width: thin;
                    scrollbar-color: #fbbf24 rgba(0, 0, 0, 0.4);
                }
            `}</style>
        </div>
    );
};

export default ChatWidget;
