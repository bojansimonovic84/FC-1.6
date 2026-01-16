
import React, { useState } from 'react';
import type { OrderDetails, PricingPlan } from '../types';
import { MANIFESTATION_GOALS } from '../constants';
import Button from './ui/Button';
import { playSound } from '../services/audioService';

interface OrderFormProps {
  plan: PricingPlan;
  onClose: () => void;
  onSubmit: (details: Omit<OrderDetails, 'plan'>) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ plan, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [goal, setGoal] = useState(MANIFESTATION_GOALS[0].id);
  const [detailedGoal, setDetailedGoal] = useState('');
  const [voice, setVoice] = useState<'male' | 'female'>('female');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!detailedGoal || detailedGoal.length < 10) {
        alert("Please describe your goal in detail using the present tense (e.g., 'I possess...', 'I am...').");
        return;
    }
    onSubmit({ name, email, gender, goal, detailedGoal, voice });
  };

  const handleGoalSelect = (id: string) => {
    playSound('click');
    setGoal(id);
  };

  return (
    <div className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 md:p-10 w-full max-w-5xl my-auto relative shadow-[0_0_150px_rgba(0,0,0,1)]">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 text-gray-500 hover:text-white transition-all p-2 z-10 hover:rotate-90"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <header className="mb-8 border-b border-white/5 pb-6">
          <div className="flex items-center gap-4 mb-2">
             <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,1)]"></div>
             <h2 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-400 to-yellow-600 uppercase tracking-tighter">
              Project Specification
            </h2>
          </div>
          <p className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] ml-7">
            Neural Engineering Tier: <span className="text-amber-500/90">{plan.name}</span>
          </p>
        </header>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Top Identity Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/70">Neural Signature Name</label>
              <input 
                type="text" 
                placeholder="ENTER FULL NAME"
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
                className="block w-full h-12 bg-black/60 border border-white/20 rounded-2xl px-5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-white/30 text-xs font-black uppercase tracking-widest shadow-[inner_0_2px_4px_rgba(0,0,0,0.5)]" 
              />
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/70">Secure Delivery Endpoint</label>
              <input 
                type="email" 
                placeholder="YOUR@EMAIL.COM"
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                className="block w-full h-12 bg-black/60 border border-white/20 rounded-2xl px-5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-white/30 text-xs font-black uppercase tracking-widest shadow-[inner_0_2px_4px_rgba(0,0,0,0.5)]" 
              />
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/70">Biological Identity</label>
              <div className="flex bg-black/40 p-1.5 rounded-2xl border border-white/10 h-12">
                <button 
                  type="button" 
                  onClick={() => setGender('female')}
                  className={`flex-1 rounded-xl text-[10px] font-black uppercase transition-all duration-300 ${gender === 'female' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-white/20 hover:text-white/50'}`}
                >
                  Feminine
                </button>
                <button 
                  type="button" 
                  onClick={() => setGender('male')}
                  className={`flex-1 rounded-xl text-[10px] font-black uppercase transition-all duration-300 ${gender === 'male' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-white/20 hover:text-white/50'}`}
                >
                  Masculine
                </button>
              </div>
            </div>
          </div>

          {/* Goal Matrix - RE-INTRODUCED PILL CARDS */}
          <div className="space-y-4">
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/70">Select Manifestation Target</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MANIFESTATION_GOALS.map(g => {
                const isSelected = goal === g.id;
                const isCustom = g.id === 'custom';
                
                const selectedStyle = isCustom 
                  ? 'bg-gradient-to-br from-teal-400 to-teal-700 border-transparent text-black shadow-[0_0_40px_rgba(45,212,191,0.5)] scale-[1.03] z-10' 
                  : 'bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-600 border-transparent text-black shadow-[0_0_40px_rgba(245,158,11,0.4)] scale-[1.03] z-10';
                
                const unselectedStyle = 'bg-black/40 border-white/10 text-white/50 hover:border-white/30 hover:bg-black/60';

                return (
                  <button
                    type="button"
                    key={g.id}
                    onClick={() => handleGoalSelect(g.id)}
                    className={`
                      relative group p-6 rounded-[2rem] transition-all duration-500 flex flex-col items-start border text-left overflow-hidden
                      ${isSelected ? selectedStyle : unselectedStyle}
                    `}
                  >
                    {/* Sparkle effect for custom */}
                    {isCustom && isSelected && (
                      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:15px_15px] animate-[custom-sparkles_2s_linear_infinite]"></div>
                    )}

                    <div className="flex items-center gap-4 mb-3 relative z-10">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-black/20 text-black' : (isCustom ? 'text-teal-400' : 'text-amber-500')}`}>
                        <g.icon className="h-6 w-6" />
                      </div>
                      <span className={`text-xs md:text-sm font-black uppercase tracking-widest ${isSelected ? 'text-black' : 'text-white'}`}>
                        {g.title}
                      </span>
                    </div>
                    
                    <p className={`text-[10px] md:text-xs leading-relaxed font-bold transition-colors relative z-10 ${isSelected ? 'text-black/80' : 'text-white/20 group-hover:text-white/40'}`}>
                      {g.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Statement Area */}
          <div className="space-y-4 bg-black/70 p-6 rounded-[2rem] border border-white/10 shadow-2xl relative">
            <div className="flex justify-between items-center mb-1">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-teal-400/80">Neural Statement (Present Tense)</label>
                <div className="flex items-center gap-2">
                    <span className="text-[9px] text-amber-500/80 uppercase font-black tracking-widest italic animate-pulse">Required Protocol</span>
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                </div>
            </div>
            <textarea 
              value={detailedGoal} 
              onChange={e => setDetailedGoal(e.target.value)} 
              rows={3} 
              required 
              className="block w-full bg-transparent border-none text-white focus:outline-none transition-all text-sm md:text-xl lg:text-2xl leading-relaxed placeholder:text-white/20 resize-none font-bold italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" 
              placeholder={`Type exactly like: "I am now earning €20,000 monthly through my creative passions."`}
            ></textarea>
          </div>

          {/* Final Row: Voice & Submit */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-white/5">
            <div className="w-full md:w-auto space-y-3">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/70">Vocal Frequency Guide</label>
              <div className="flex bg-black/40 p-1.5 rounded-2xl border border-white/10 h-14 w-full md:w-72">
                <button 
                  type="button" 
                  onClick={() => setVoice('female')}
                  className={`flex-1 rounded-xl text-[10px] font-black uppercase transition-all duration-300 ${voice === 'female' ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-lg shadow-amber-500/20' : 'text-white/20 hover:text-white/50'}`}
                >
                  Divine Feminine
                </button>
                <button 
                  type="button" 
                  onClick={() => setVoice('male')}
                  className={`flex-1 rounded-xl text-[10px] font-black uppercase transition-all duration-300 ${voice === 'male' ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-lg shadow-amber-500/20' : 'text-white/20 hover:text-white/50'}`}
                >
                  Divine Masculine
                </button>
              </div>
            </div>

            <div className="w-full md:w-auto">
                <Button type="submit" variant="pill-gold" className="w-full md:w-auto px-16 py-5 scale-110">
                    <span className="flex items-center gap-4">
                        ENGINEER MY CODE
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping shadow-[0_0_15px_rgba(45,212,191,1)]"></div>
                    </span>
                </Button>
            </div>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes custom-sparkles {
          0% { background-position: 0px 0px; }
          100% { background-position: 30px 30px; }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.3) !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default OrderForm;
